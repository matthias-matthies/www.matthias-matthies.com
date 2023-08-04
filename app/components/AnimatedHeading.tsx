'use client';

import {motion} from "framer-motion"
import React from "react";

interface AnimatedHeadingProps {
    children?: React.ReactNode;
    className?: string;
}

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({children = "", className = ""}) => {
    return (
        <div className={`w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden`}>
            <motion.h1
                className={`inline-block w-full text-dark font-bold text-3xl 2xl:text-6xl ${className}`}
                variants={quote}
                initial={'initial'}
                whileInView={'animate'}
            >
                {
                    children ?
                    children.toString().split(" ").map((word, index) =>
                        <motion.span
                            key={word+"-"+index}
                            className={'inline-block'}
                            variants={singleWord}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                    : ""
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedHeading
