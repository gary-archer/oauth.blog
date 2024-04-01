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

- Navbar with links to Main Index / Quick Start / About Me
  In large layouts this should be fixed on the [top right hand side](https://www.shecodes.io/athena/5956-moving-a-menu-to-fixed-positioning-at-the-top-right)
  In mobile layouts use a layout where the menu is after all other content, with logic from my SPA

- Add [rewrites for old paths](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)

- Gradually migrate all remaining posts
  Also polish existing posts with formatting and more migration

- Deploy to S3
  Buy an AWS domain and create certs
  Create a Cloudfront domain and do a fixed redirect without any code

- PRISM Toolbar with Copy to Clipboard
  This feels like the one remaining difficult job
