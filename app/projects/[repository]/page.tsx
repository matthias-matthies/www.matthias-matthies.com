import ProjectsList from '@/app/components/ProjectsList'
import AnimatedHeading from '@/app/components/AnimatedHeading'


export default function ProjectsPage({params}: {params: {repository?: string;}}) {
    return (
        <main>
            <AnimatedHeading text={"Tue, was du liebst, liebe, was du tust."} className="text-left"/>
            {params.repository}
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