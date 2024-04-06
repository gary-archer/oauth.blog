# APIs and Clients

Web static content for my blog at https://apisandclients.io.

## Blog Architecture

The blog is primarily written using markdown and has minimal JavaScript logic.\
The overall structure is from [Next.js Tutorials](https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data).

## Running the Blog

| Command | Description |
| ------- | ----------- |
| npm install | First install dependencies |
| npm start | Run in development mode with a browser at http://localhost:3000 |
| ./deploy-local.sh | Run in deployed mode locally using http://localhost:3001 |
| ./deploy-aws.sh | I use this script to deploy static content to AWS Cloudfront |

## Online URL

The blog is hosted at the following online URL in AWS Cloudfront:

- http://apisandclients.io.s3-website.eu-west-2.amazonaws.com/

## TODO

- Get all post content migrated as the priority

- Buy the Cloudfront domain, create its certs and get deployment working
  Add a deployment link to the README to my post on web deployment

- Make repo public
  Post on the react-prism repo the details from here and my simplified implementation:
  https://github.com/sergioramos/remark-prism/issues/454

- Test Cloudfront upgrades
  Perhaps I need to base it on last changed date, with a sync all option also

- Understand web requests and navigation properly in both development and release modes
  This will help me to understand Link v anchor behavior

- Transfer the authguidance.com domain to AWS
  Configure a redirect and put all of the ugly rewrites there for resources with no extension
  It is OK if this is a little slow
