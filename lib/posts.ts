import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

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

    const fileName = `${id}.mdx`;
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const frontmatter = matter(fileContents);

    return {
        id,
        fileName,
        frontmatter: frontmatter.data,
    };
}
