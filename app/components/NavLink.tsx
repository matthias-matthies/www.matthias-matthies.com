import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
    className?: string;
    href: string;
    title: string;
    target?: string;
}

const NavLink: React.FC<NavLinkProps> = ({className, href, title, target}) => {
    return (
        <Link
            className={`${className}`}
            href={href}
            target={target ? target : '_self'}
        >
            {title}
        </Link>
    )
}

export default NavLink
