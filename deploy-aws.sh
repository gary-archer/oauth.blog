#!/bin/bash

###################################################
# A script to upload the blog static content to AWS
###################################################

cd "$(dirname "${BASH_SOURCE[0]}")"

WEB_ORIGIN='http://apisandclients.com'
BUCKET_NAME='apisandclients.com'

#
# Get the platform
#
case "$(uname -s)" in

  Darwin)
    PLATFORM="MACOS"
 	;;

  MINGW64*)
    PLATFORM="WINDOWS"
	;;

  Linux)
    PLATFORM="LINUX"
	;;
esac

#
# Install dependencies if required
#
if [ ! -d 'node_modules' ]; then
  
  npm install
  if [ $? -ne 0 ]; then
    exit 1
  fi
fi

#
# Build the blog to static content
#
rm -rf dist 2>/dev/null
npm run buildRelease
if [ $? -ne 0 ]; then
  exit 1
fi

#
# Move the folder with HTML files out of the way
#
rm -rf tmp 2>/dev/null
mv dist/posts tmp

#
# Delete any existing files in the S3 bucket
#
aws s3 rm "s3://$BUCKET_NAME" --recursive
if [ $? -ne 0 ]; then
  exit 1
fi

#
# Upload all files except HTML files
#
aws s3 cp dist "s3://$BUCKET_NAME" --recursive
if [ $? -ne 0 ]; then
  exit 1
fi

#
# Special logic to get HTML files to be served correctly by S3
# Rename each post HTML file without a .html suffix and upload it with a content type
#
mv tmp dist/posts
cd dist/posts
for file in *.html; do

    FILENAME="${file%%.html}"
    mv -- "$file" "$FILENAME"
    aws s3api put-object         \
      --bucket apisandclients.com \
      --key posts/$FILENAME      \
      --body $FILENAME           \
      --content-type text/html
done
cd ../..

#
# TODO: Ensure that I invalidate Cloudfront files in an efficient way without incurring undue costs
#
DISTRIBUTION_ID='E1YM2UP28R4CHP'
aws cloudfront create-invalidation --distribution-id=$DISTRIBUTION_ID --paths '/*'

#
# Open the system browser
#
if [ "$PLATFORM" == 'MACOS' ]; then

  open $WEB_ORIGIN

elif [ "$PLATFORM" == 'WINDOWS' ]; then

  start $WEB_ORIGIN

elif [ "$PLATFORM" == 'LINUX' ]; then

  xdg-open $WEB_ORIGIN

fi
