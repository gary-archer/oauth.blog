# APIs and Clients

Web static content for my blog at https://apisandclients.io.

## Blog Architecture

The blog is based on the [Next.js Tutorials](https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data).

## Strategy

- Tidy up existing code but stick to JavaScript, since I will not write much more
- Use Express deployment and set response headers, avoiding inline CSS if I can
- Migrate blog post 1
- Migrate blog post 2 and see how long it takes
- Do [rewrites for old paths](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites)

## NOTES

- [TypeScript seems not worthwhile](https://nextjs.org/docs/pages/building-your-application/configuring/typescript#minimum-typescript-version)
- [Modules seem not worthwhile](https://stackoverflow.com/questions/77729967/nextjs-image-error-react-jsx-type-is-invalid#:~:text=Warning%3A%20React.,up%20default%20and%20named%20imports.)

## next.config.js

Rewrites:

```javascript
const nextConfig = {
    async rewrites() {
       return [
         {
             source: '/new-rewrite-path',
             destination: '/old-rewrite-path',
          },
       ]
  },
}
module.exports = nextConfig
```
