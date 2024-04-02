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

## TODO

- Add [rewrites for old paths](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)
  Write the initial deploy to AWS script
  Deploy to S3 and test over HTTP - email a link to my mobile device for mobile testing

- Gradually migrate all remaining posts
  Gradually spend some time on formatting on links to finalize each post

- PRISM Toolbar with Copy to Clipboard
  This feels like the one remaining difficult job

- Buy an AWS domain and create certs
  Create a Cloudfront domain and do a fixed redirect without any code

