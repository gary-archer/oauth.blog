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

## Content

- Get home page rendering and then write it
- Get index page rendering and write the initial part of it
- Get quick start rendering and then write it

## Presentation

- Add more space
- Look more into blog themes and layouts
- Image width to control
- Improve text formatting to match current blog

## Code Consolidation

- Code tidy up with comments
- Upgrade to [TypeScript and modules](https://nextjs.org/docs/pages/building-your-application/configuring/typescript)

## Deployment

- Add [rewrites for old paths](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)
- Add security headers
- Deploy to S3

## Wishlist

- PRISM Toolbar and Copy to Clipboard
- Lightbox effect for images will require an update to MDX
