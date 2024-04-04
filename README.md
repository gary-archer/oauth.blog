# APIs and Clients

Web static content for my blog at https://apisandclients.io.

## Blog Architecture

The blog is primarily written using GitHub markdown and images.\
The JavaScript and layout is from [Next.js Tutorials](https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data).

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

- Gradually migrate all remaining posts
  Gradually spend some time on formatting on links to finalize each post
  Gradually refine CSS

- Understand web requests properly in both development and release modes
  This will help me to understand Link v anchor behavior

- PRISM Toolbar with Copy to Clipboard
  This feels like the one remaining difficult job

- Get Cloudfront deployment working in the simplest way
  Buy an AWS domain, create certs then create a Cloudfront domain

- Transfer the old domain
  Configure a redirect and put the rewrites there
