import './projects.css'
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
        <div className={`container mx-auto md:px-0 px-2`}>
            {children}
        </div>
    )
}
