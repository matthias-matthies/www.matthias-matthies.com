import React from 'react'
import Image, {StaticImageData} from 'next/image'
import Link from 'next/link'
import {GitHubIcon} from '@/app/components/BrandIcon'

interface ProjectCardProps {
    name: string;
    thumbnail: string;
    description: string;
    slug: string;
    language?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({name, thumbnail, description, slug, language}) => {
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
                <p className="my-4 text-blue-500 flex flex-wrap">
                    {/*
                        tags.map((tag, index) => <span className="mr-2 my-1 border border-blue-500 cursor-pointer p-1 rounded" key={index}>{tag}</span>)
                    */}
                </p>
                {
                    language
                        ? (<p className="my-4 text-blue-500 flex flex-wrap">
                            <span className="mr-2 my-1 border border-blue-500 cursor-pointer p-1 rounded">{language}</span>
                        </p>)
                        : ("")
                }
                <h3
                    className={`inline-block w-full text-dark font-bold text-3xl 2xl:text-6xl`}
                >
                    {name}
                </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
