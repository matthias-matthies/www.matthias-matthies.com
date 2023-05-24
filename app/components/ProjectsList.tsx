import React from 'react'
import ProjectCard from '@/app/components/ProjectCard'
import {StaticImageData} from 'next/image'
import matthiasMatthiesWebsiteThumbnail from "@/public/matthias-matthies-website-thumbnail.png"
const ProjectsList: React.FC = () => {
    const projects = [
        {
            description: "Erstellung einer interaktiven Webseite mit Next.js, Locomotive Scroll, Framer Motion und Tailwind CSS. Die Webseite wurde auf Vercel gehostet und nutzt eine CI/CD-Pipeline, die auf GitHub und Vercel basiert, um automatische Bereitstellungen und kontinuierliche Integration zu ermöglichen. Die Pipeline gewährleistet eine effiziente Entwicklung und ein nahtloses Deployment.",
            name: "Webseite Matthias Matthies",
            thumbnail: matthiasMatthiesWebsiteThumbnail,
            href: `/projects/website-matthias-matthies`,
            tags: [
                "Nextjs", "Vercel", "Tailwindcss", "GitHub", "Webdesign"
            ]
        }
    ]
    return (
        <div
            className="w-full container mx-auto py-8 font-medium flex items-center justify-between"
        >
            <ul>
                {projects.map((project, index) => {
                    return (
                        <li key={index}>
                            <ProjectCard
                                tags={project.tags}
                                description={project.description}
                                name={project.name}
                                thumbnail={project.thumbnail}
                                href={project.href}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProjectsList
