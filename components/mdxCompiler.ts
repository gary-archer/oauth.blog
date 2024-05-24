import {compile} from '@mdx-js/mdx'
import fs from 'fs-extra';
import remarkGfm from 'remark-gfm'
import remarkPrism from 'remark-prism'

/*
 * Load MDX text on the server and compile it to the serializable JavaScript format
 * https://mdxjs.com/guides/mdx-on-demand
 */
export async function compileMdx(filename: string): Promise<Uint8Array | string> {

    const mdx = await fs.readFile(`posts/${filename}.mdx`, 'utf8');
    
    const js = await compile(mdx, {
        outputFormat: 'function-body',
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkGfm, remarkPrism],
    });

    return js.value;
}
