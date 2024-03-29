# APIs and Clients

Web static content for my blog at https://apisandclients.io.

## Blog Architecture

The blog is primarily written using GitHub markdown and images.\
The JavaScript and layout is from [Next.js Tutorials](https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data).

## Running the Blog

| Command | Description |
| ------- | ----------- |
| npm install | First install dependencies |
| ./start.sh | Run in development mode |
| ./deploy-local.sh | Run in deployed mode locally |
| ./deploy-aws.sh | I use this to deploy static content to AWS Cloudfront |

## Monday Tasks

- Get Express deployment working to a basic level
- Replace blog post 1
- Replace blog post 2 and see how long it takes
- Finalize deployment including response headers and ensure performance is good
- Tidy up existing code but stick to JavaScript, since I will not write much more
- Do [rewrites for old paths](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)
