import React from 'react'
import ProjectCard from '@/app/components/ProjectCard'

interface ProjectObject {
    name: string;
    github_url: string;
    slug: string;
    description: string;
    thumbnail: string;
    language: string;
}

interface ProjectListProps {
    projects: ProjectObject[]
}
const ProjectsList: React.FC<ProjectListProps> = ({projects}) => {
    return (
        <div
            className="w-full container mx-auto py-8 font-medium flex items-center justify-between"
        >
            <ul>
                {projects.map((project, index) => {
                    return (
                        <li key={index}>
                            <ProjectCard
                                language={project.language}
                                description={project.description}
                                name={project.name}
                                thumbnail={project.thumbnail}
                                slug={project.slug}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProjectsList
