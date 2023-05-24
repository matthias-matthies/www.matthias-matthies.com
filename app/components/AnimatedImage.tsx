import Image, {StaticImageData} from 'next/image'
import React from "react";

interface AnimatedImageProps {
    src: StaticImageData;
    alt: string;
    className?: string;
}
const AnimatedImage: React.FC<AnimatedImageProps> = ({src, alt, className=""}) => {
    return (
        <Image
            src={src}
            alt={alt}
            className={`${className}`}
        />
    )
}

export default AnimatedImage
