# TypeScript and Code Notes

These are the roles of each page containing code:

## pages/_app.js

- Creates a custom application as an `App` component
- Imports global styles

## pages/index.js

- Renders the Home component
- Returns GetStaticProps to enable static content generation

## pages/posts/[id].js

- Renders the Post component
- Returns GetStaticProps to enable static content generation
- returns GetStaticPaths to control which pages are generated during the build

## components/layout.js

- Renders the Layout component with the shell application containing children

## lib/posts.js

- getAllPostIds is returned to GetStaticPaths to force build-time generation
- getPostData returns full markdown for one page and does the markdown processing
