# APIs and Clients

The content for my blog at https://apisandclients.com.

## Running the Blog

| Step | Description |
| ---- | ----------- |
| npm install | First install dependencies |
| npm start | Run in development mode and open a browser at http://localhost:3000 |
| Wait for compilation | The web content takes a minute or two to compile before being ready |
| ./deploy-local.sh | Run in deployed mode locally using http://localhost:3001 |
| ./deploy-aws.sh | I use this script to deploy static content to AWS CloudFront |

## Blog Architecture

The blog is primarily written using markdown and has minimal JavaScript logic:

- The folder layout and processing of markdown is explained in [NEXT.js Tutorials](https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data).
- I then updated to [MDX](https://nextjs.org/docs/pages/building-your-application/configuring/mdx) to enable client-side navigation via `Link` elements.
- I use [MDX on Demand](https://mdxjs.com/guides/mdx-on-demand) for best control over compiling and rendering
- The static content is then distributed globally using a [content delivery network](https://apisandclients.com/posts/cdn-static-content-delivery)
