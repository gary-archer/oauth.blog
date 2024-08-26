# APIs and Clients

The content for my blog at https://apisandclients.com.

## Running the Blog

| Step | Description |
| ---- | ----------- |
| npm install | First install dependencies |
| npm start | Run in development mode and open a browser at http://localhost:3000 |
| Wait for compilation | The web content may takes a minute to compile before being ready |
| ./deploy-local.sh | Run in deployed mode locally using http://localhost:3001 |
| ./deploy-aws.sh | I use this script to deploy static content to AWS CloudFront |

## Blog Technology

The blog is primarily written using markdown and has minimal JavaScript logic:

- The folder layout and processing of markdown is explained in [NEXT.js Tutorials](https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data).
- I then updated to [MDX](https://nextjs.org/docs/pages/building-your-application/configuring/mdx) to enable client-side navigation via `Link` elements.
- The static content is then distributed globally using a [content delivery network](https://apisandclients.com/posts/cdn-static-content-delivery)

The following plugins are used to extend built-in markdown behaviours:

| Plugin | Usage |
| ------ | ----- |
| remark-gfm-no-autolink | Render GitHub tables as HTML tables |
| remark-prism | Syntax highlighting for code snippets |
| rehype-slug | Add ids to h3 subheadings to enable rendering them as links |
