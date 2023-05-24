import ProjectsList from '@/app/components/ProjectsList'
import AnimatedHeading from '@/app/components/AnimatedHeading'

export default function ProjectsPage() {
    return (
        <main>
            <AnimatedHeading text={"Tue, was du liebst, liebe, was du tust."} className="text-left"/>
            <p className="mb-12">
                Meine Leidenschaft, Software.<br />
                Von der Idee zur Realität in Softwareprojekte. Mit jedem Codezeile liebe ich, was ich tue, und mit jedem abgeschlossenen Projekt tue ich, was ich liebe. Softwareentwicklung ist meine Berufung, und ich brenne dafür, Innovationen zum Leben zu erwecken.
            </p>
            <ProjectsList />
        </main>
    )
}
