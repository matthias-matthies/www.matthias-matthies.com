import React from 'react'
import Image, {StaticImageData} from 'next/image'
import Link from 'next/link'
import {GitHubIcon} from '@/app/components/BrandIcon'

interface ProjectCardProps {
    name: string;
    thumbnail: string;
    description: string;
    slug: string;
    github_url: string;
    language?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({name, thumbnail, description, slug, github_url, language}) => {
    return (
        <div
            className="flex flex-row border border-black rounded-2xl p-12 gap-4"
        >
            <Link
                className="w-1/2 rounded-xl border"
                href={slug}
            >
                <Image
                    className="rounded-xl"
                    src={thumbnail}
                    alt={`Thumbnail Project: ${name}`}
                />
            </Link>
            <div
                className="w-1/2"
            >
                {
                    language
                        ? (<p className="my-4 text-blue-500">
                            <span className="mr-2 my-1 border border-blue-500 cursor-pointer p-1 rounded">{language}</span>
                        </p>)
                        : ""
                }
                <h3
                    className="my-4 text-dark font-bold text-3xl 2xl:text-6xl"
                >
                    {name}
                </h3>
                <p>
                    {description}
                </p>
                <p
                    className="my-4"
                >
                    <a
                        className="my-1 border border-blue-500 cursor-pointer p-1 rounded text-blue-500"
                        href={github_url}
                    >
                        Source Code
                    </a>
                </p>
            </div>
        </div>
    )
}

export default ProjectCard
