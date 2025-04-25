
## Blog Technology

The blog is primarily written using MDX markdown and has minimal JavaScript logic:

- MDX files render directly if this GitHub repository's files are browsed.
- MDX content renders in the NEXT.js development host.
- MDX content built to HTML renders from any web static content host.

I use the following plugins so that standard GitHub behaviours work in NEXT.js:

| Plugin | Usage |
| ------ | ----- |
| remark-gfm-no-autolink | Render GitHub tables as HTML tables |
| remark-prism | Syntax highlighting for code snippets |
| rehype-slug | Add ids to h3 subheadings aso that they render as links |
