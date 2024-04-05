# APIs and Clients

Web static content for my blog at https://apisandclients.io.

## Blog Architecture

The blog is primarily written using markdown and has very little JavaScript code.\
The overall structure is from [Next.js Tutorials](https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data).

## Running the Blog

| Command | Description |
| ------- | ----------- |
| npm install | First install dependencies |
| npm start | Run in development mode with a browser at http://localhost:3000 |
| ./deploy-local.sh | Run in deployed mode locally using http://localhost:3001 |
| ./deploy-aws.sh | I use this to deploy static content to AWS Cloudfront |

## Online URL

The blog is hosted at the following online URL in AWS Cloudfront:

- http://apisandclients.io.s3-website.eu-west-2.amazonaws.com/

## TODO

- PRISM Toolbar with Copy to Clipboard
  Tidy up layour file, create a code module and add a link to this nice article
  Fix duplicated copy button and debug useEffect to understand it - is strict mode used?
  Add some comments to classes on how they fit into the React lifecycle
  https://css-tricks.com/syntax-highlighting-prism-on-a-next-js-site/

- Gradually migrate all remaining posts
  Gradually spend some time on formatting on links to finalize each post
  Gradually refine CSS

- Understand web requests properly in both development and release modes
  This will help me to understand Link v anchor behavior

- Buy the Cloudfront domain and create its certs
  Get on top of the upgrade process, perhaps based on last changed date, with a sync all option also

- Transfer the old domain
  Configure a redirect and put all of the ugly rewrites there for resources with no extension
