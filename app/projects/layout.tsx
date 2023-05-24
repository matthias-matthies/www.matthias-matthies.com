import './projects.css'
import AnimatedHeading from '@/app/components/AnimatedHeading'
export const metadata = {
    title: 'Blog Title',
    description: 'Website Blog Description',
}

export default function ProjectsLayout(
    {
        children
    }:
        {
            children: React.ReactNode
        }
) {
    return (
        <div className={`container mx-auto`}>
            <AnimatedHeading text={"Tue, was du liebst, liebe, was du tust."} className="text-left"/>
            <p>
                Meine Leidenschaft, Software.<br />
                Von der Idee zur Realität in Softwareprojekte. Mit jedem Codezeile liebe ich, was ich tue, und mit jedem abgeschlossenen Projekt tue ich, was ich liebe. Softwareentwicklung ist meine Berufung, und ich brenne dafür, Innovationen zum Leben zu erwecken.
            </p>
            {children}
        </div>
    )
}
