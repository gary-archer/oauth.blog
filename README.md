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

## Next Tasks

- Add lightbox effect for images will require MDX
- PRISM 
- Image width to control
- Improve text in line with current blog

### Local Deployment

- Headers and CSP

## Future Tasks

- Finalize deployment headers and view them in browser tools
- Tidy up existing code but stick to JavaScript, since I will not write much more
- Do [rewrites for old paths](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)
- Consider [a TypeScript update](https://nextjs.org/docs/pages/building-your-application/configuring/typescript)
- Look more into blog themes and layouts
- Use frontmatter metadata tags to supporting categorizing and sorting posts in various ways
- Updates to MDX, modules and TypeScript
