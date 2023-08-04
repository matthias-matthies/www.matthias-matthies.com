import ProjectsList from '@/app/components/ProjectsList'
import AnimatedHeading from '@/app/components/AnimatedHeading'

/**
 * Fetching Stuff off Github API
 * https://api.github.com/users/matthias-matthies <- User Data
 * https://api.github.com/users/matthias-matthies/repos <- Repos
 */
const getProjects = async () => {
    const res = await fetch(`https://api.github.com/users/matthias-matthies/repos`);
    const json = await res.json()
    // @ts-ignore
    const repos = json.map((repo) => {
        return {
            name: repo.name,
            github_url: repo.html_url,
            slug: repo.name,
            description: repo.description,
            language: repo.language,
            thumbnail: '', // Muss ich mal gucken, wie ich das machen werde..
            api_url: repo.url,
            updated_at: repo.updated_at,
            created_at: repo.created_at,
        }
    })
    return repos;
}

export default async function ProjectsPage() {
    const projects = await getProjects()
    return (
        <main>
            <AnimatedHeading>
                Tue, was du liebst, liebe, was du tust.
            </AnimatedHeading>
            <p className="mb-12">
                Meine Leidenschaft - Software.<br />
                Von der Idee zur Realität in Softwareprojekte. Mit jeder Codezeile liebe ich, was ich tue, und mit jedem abgeschlossenen Projekt tue ich, was ich liebe. Softwareentwicklung ist meine Berufung, und ich brenne dafür, Innovationen zum Leben zu erwecken.
            </p>
            {<ProjectsList projects={projects}/>}
        </main>
    )
}
