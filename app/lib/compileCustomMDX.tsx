import {compileMDX} from "next-mdx-remote/rsc";
import AnimatedHeading from "@/app/components/AnimatedHeading";
import {MergeComponents} from "@mdx-js/react/lib";
import {MDXComponents} from "mdx/types";

const components: MDXComponents | MergeComponents | null | undefined = {
    h1: AnimatedHeading,
}
export async function compileCustomMDX(fileContent) {
    const { frontmatter, content } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true },
        components
    })

    return {
        meta: {
            ...frontmatter
        },
        content
    }
}
