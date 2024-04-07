import fs from 'fs';
import matter from 'gray-matter';
import {serialize} from 'next-mdx-remote/serialize';
import path from 'path';
import remarkGfm from 'remark-gfm'
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
                id: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}

/*
 * Get the data for one post and return it as MDX source that can be rendered by MDXRemote
 */
export async function getPostData(id: string): Promise<any> {

    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {content, data} = matter(fileContents);

    const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkPrism],
        },
        scope: data,
    });
    
    return {
        source: mdxSource,
        frontmatter: data,
    };
}
