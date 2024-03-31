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

First 2 blog posts:

- Get [tables working](https://unifiedjs.com/learn/recipe/remark-table/)
- Get images working with a folder structure and use JPG instead of PNG
- Get formatting working
- Test on mobile layouts

## Future Tasks

- Finalize deployment headers and view them in browser tools
- Tidy up existing code but stick to JavaScript, since I will not write much more
- Do [rewrites for old paths](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)
- Look more into blog themes and layouts
- Use frontmatter metadata tags to supporting categorizing and sorting posts in various ways
- Updates to MDX, modules and TypeScript
