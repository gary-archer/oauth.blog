# OAuth Developer Blog

A technical blog with a focus on productive and reliable OAuth development setups:

- [Home Page](public/posts/home.mdx)
- [Index Page](public/posts/index.mdx)
- [Code Samples](public/posts/quick-start.mdx)

## Running the Blog

| Step | Description |
| ---- | ----------- |
| npm install | First install dependencies |
| npm start | Run in development mode and open a browser at http://localhost:3000 |
| Wait for compilation | The web content may takes a minute to compile before being ready |
| ./deploy-local.sh | Run in deployed mode locally using http://localhost:3001 |
| ./deploy-aws.sh | I use this script to deploy static content to AWS CloudFront |

## Blog Technology

The blog is primarily written using MDX markdown and has minimal JavaScript logic:

- MDX files render in their [GitHub repository](https://github.com/gary-archer/apisandclients.com/tree/master/public/posts).
- MDX content renders in the NEXT.js development host.
- MDX content built to HTML renders from any web static content host

I use the following NEXT.js plugins so that standard GitHub behaviours work in NEXT.js:

| Plugin | Usage |
| ------ | ----- |
| remark-gfm-no-autolink | Render GitHub tables as HTML tables |
| remark-prism | Syntax highlighting for code snippets |
| rehype-slug | Add ids to h3 subheadings aso that they render as links |
