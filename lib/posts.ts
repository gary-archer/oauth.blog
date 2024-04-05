import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {remark} from 'remark';
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism'

const postsDirectory = path.join(process.cwd(), 'posts');

/*
 * Read all MD files and return an array of objects with IDs
 */
export function getAllPostIds(): any {

    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {

        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

/*
 * Get the data and HTML for one post
 * - gray-matter parses the post metadata
 * - remark converts markdown into an HTML string
 * - remark-gfm processes GitHub Flavored Markdown to process tables
 * - remark-prism renders code blocks
 */
export async function getPostData(id: string): Promise<any> {

    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(remarkPrism)
        .use(remarkGfm)
        .use(remarkHtml, { sanitize: false })
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
