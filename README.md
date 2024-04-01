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

## Code Consolidation

- Code tidy up with comments
- Upgrade to [TypeScript and modules](https://nextjs.org/docs/pages/building-your-application/configuring/typescript)

## Content

- Look more into blog themes and layouts
- Control image widths with a minimum of 400
- Improve text formatting to match current blog

## Deployment

- Add [rewrites for old paths](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)

## Wishlist

- Navbar needed with links to Main Index / Quick Start / About Me
- PRISM Toolbar with Copy to Clipboard
- Lightbox effect for images, which may require an update to MDX
