import React, {ReactNode} from 'react'

interface IconLinkProps {
    className?: string;
    href: string;
    children?: ReactNode;
}
const IconLink: React.FC<IconLinkProps> = ({className = "", href, children}) => {
    return (
        <a
            target="_blank"
            href={href}
            className={`${className} cursor-pointer target hover:-translate-y-1 duration-150`}
        >
            {children}
        </a>
    )
}

export default IconLink