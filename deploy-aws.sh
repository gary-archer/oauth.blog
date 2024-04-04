#!/bin/bash

###################################################
# A script to upload the blog static content to AWS
###################################################

cd "$(dirname "${BASH_SOURCE[0]}")"

WEB_ORIGIN='http://apisandclients.io.s3-website.eu-west-2.amazonaws.com'
BUCKET_NAME='apisandclients.io'

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
# Move the HTML folder out of the way
#
rm -rf tmp 2>/dev/null
mv dist/posts tmp

#
# Upload all files except post HTML files
#
aws s3 cp dist "s3://$BUCKET_NAME" --recursive
if [ $? -ne 0 ]; then
  exit 1
fi

#
# Delete any existing post HTML files
#
aws s3 rm "s3://$BUCKET_NAME/posts" --recursive
if [ $? -ne 0 ]; then
  exit 1
fi

#
# Rename each post HTML file without a .html suffix and upload it with a content type
#
mv tmp dist/posts
cd dist/posts
for file in *.html; do

    FILENAME="${file%%.html}"
    mv -- "$file" "$FILENAME"
    aws s3api put-object         \
      --bucket apisandclients.io \
      --key posts/$FILENAME      \
      --body $FILENAME           \
      --content-type text/html
done
cd ../..

#
# Wait for the blog static content to become available
#
echo 'Waiting for Web Host to become available ...'
while [ "$(curl -k -s -o /dev/null -w ''%{http_code}'' "$WEB_ORIGIN/index.html")" != '200' ]; do
  sleep 2
done

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
