import {run} from '@mdx-js/mdx'
import {MDXModule} from '@mdx-js/mdx/lib/evaluate';
import {useMDXComponents} from '@mdx-js/react'
import Link from 'next/link';
import runtime from 'react/jsx-runtime';

/*
 * Run MDX on the client to create a renderable module
 * https://mdxjs.com/guides/mdx-on-demand
 */
export async function runMdx(js: Uint8Array | string): Promise<MDXModule> {

    const getComponents = () => {

        return {
            Link,
            ...useMDXComponents(),
        };
    }

    return await run(js, {...runtime, useMDXComponents: getComponents});
}
