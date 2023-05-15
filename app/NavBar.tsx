import NavLink from '@/app/NavLink'
import React from 'react'
import IconLink from '@/app/IconLink'
import {GitHubIcon, LinkedInIcon, TwitterIcon} from '@/app/BrandIcon'

const NavBar: React.FC = () => {
    return (
        <div
            className="w-full px-32 py-8 font-medium flex items-center justify-between"
        >
            <nav>
                <NavLink href="/" title="Home" className="mr-4"/>
                <NavLink href="/projects" title="Project" className="mx-4" />
                <NavLink href="/blog" title="Blog" className="mx-4" />
            </nav>

            <nav
                className="flex items-center justify-center flex-wrap"
            >
                <IconLink
                    className="w-6 mr-3"
                    href="https://github.com/matthias-matthies"
                >
                    <GitHubIcon />
                </IconLink>
                <IconLink
                    className="w-6 mr-3"
                    href="https://www.linkedin.com/in/matthias-matthies/"
                >
                    <LinkedInIcon />
                </IconLink>
                <IconLink
                    className="w-6 mr-3"
                    href="https://twitter.com/MatthiasDaily"
                >
                    <TwitterIcon />
                </IconLink>
            </nav>
        </div>
    )
}

export default NavBar
