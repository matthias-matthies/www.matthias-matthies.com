import AnimatedHeading from '@/app/components/AnimatedHeading'
import { compileMDX } from 'next-mdx-remote/rsc'

const components = { AnimatedHeading };

interface ProjectPageParams {
    repository: string;
}

const getMdx = async (repository: string) => {
    const res = await fetch(`https://raw.githubusercontent.com/matthias-matthies/${repository}/main/.matthias-matthies/Blog.md`);
    const source = (res.status == 404) ? `404: Not Found` : await res.text();
    const {frontmatter, content} = await compileMDX<{title: string, date: string, tags: string[]}>({
        source,
        components
    })

    return {
        meta: {
            title: frontmatter.title,
            date: frontmatter.date,
            tags: frontmatter.tags
        },
        content
    }
}

export default async function ProjectPage({ params }: { params: ProjectPageParams}) {
    const mdx = await getMdx(params.repository)
    return (
        <main>
            {
                mdx.content
            }
        </main>
    )
}

// Für Name: Name
// Für Link: html_url
// Für Beschreibung: description
// Für Blogpost Markdown oder JSON oder whatnot = https://raw.githubusercontent.com/matthias-matthies/vercel-matthias-matthies/main/.matthias-matthies/BLOG.md or .json // Muss ich mir noch überlegen, wie ich meine Repos nutzen will.
// https://raw.githubusercontent.com/[user]/[repo]/main/[path]
// Für Tags: fetch(tags_url)
// Für GitTags: fetch(tags_url)
// Für Repo direkt fetchen fetch(url) url
