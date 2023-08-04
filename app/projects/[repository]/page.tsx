"use client"
import {compileCustomMDX} from "@/app/lib/compileCustomMDX";

interface ProjectPageParams {
    repository: string;
}

const getMdx = async (repository: string) => {
    const res = await fetch(`https://raw.githubusercontent.com/matthias-matthies/${repository}/main/.matthias-matthies/Blog.md`);
    const source = (res.status == 404) ? `404: Not Found` : await res.text();

    return compileCustomMDX(source)
}

export default async function ProjectPage({ params }: { params: ProjectPageParams}) {
    const mdx = await getMdx(params.repository)
    return (
        <main>
            <article className={"prose lg:prose-xl"}>
                {
                    mdx.content
                }
            </article>
        </main>
    )
}
