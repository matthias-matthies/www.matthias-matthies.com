"use client";

import {motion} from "framer-motion"
import React from "react";

const TransitionEffect: React.FC = () => {
    /*return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "0%"}}
                transition={{duration: 0.6, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "0%"}}
                transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-blue-500"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "0%"}}
                transition={{delay: 0.4, duration: 0.6, ease: "easeInOut"}}
            />
        </>
    )*/

    /*return (
        <>
            <motion.div
                className="fixed left-0 right-0 bottom-full w-screen h-screen z-30 bg-blue-500"
                initial={{y: "100%", height: "100%"}}
                animate={{y: "0%", height: "0%"}}
                transition={{duration: 0.8, ease: "easeInOut"}}
            />

            <motion.div
                className="fixed left-0 right-0 bottom-full w-screen h-screen z-20 bg-white"
                initial={{y: "100%", height: "100%"}}
                animate={{y: "0%", height: "0%"}}
                transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
            />

            <motion.div
                className="fixed left-0 right-0 bottom-full w-screen h-screen z-10 bg-black"
                initial={{y: "100%", height: "100%"}}
                animate={{y: "0%", height: "0%"}}
                transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
            />
        </>
    )*/

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 bottom-0 right- 0 w-screen h-screen z-30 bg-blue-500"
                initial={{clipPath: "polygon(0 0, 0 100%, 100% 0)"}}
                animate={{clipPath: "polygon(0 0, 0 0, 0 0)"}}
                transition={{duration: 0.8, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 left-0 bottom-0 right- 0 w-screen h-screen z-30 bg-blue-500"
                initial={{clipPath: "polygon(100% 100%, 0% 100%, 100% 0)"}}
                animate={{clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)"}}
                transition={{duration: 0.8, ease: "easeInOut"}}
            />
        </>
    )

    /* return (
        <>
            <motion.div
                className="fixed top-0 left-0 bottom-0 right- 0 w-screen h-screen z-30 bg-blue-500"
                initial={{clipPath: "polygon(0 0, 0 100%, 100% 0)"}}
                animate={{clipPath: "polygon(0 0, 0 0, 0 0)"}}
                transition={{duration: 0.8, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 left-0 bottom-0 right- 0 w-screen h-screen z-30 bg-blue-500"
                initial={{clipPath: "polygon(100% 100%, 0% 100%, 100% 0)"}}
                animate={{clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)"}}
                transition={{duration: 0.8, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 left-0 bottom-0 right- 0 w-screen h-screen z-20 bg-black"
                initial={{clipPath: "polygon(0 0, 100% 0, 100% 100%)"}}
                animate={{clipPath: "polygon(100% 0, 100% 0, 100% 0)"}}
                transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 left-0 bottom-0 right- 0 w-screen h-screen z-20 bg-black"
                initial={{clipPath: "polygon(0 100%, 0 0, 100% 100%)"}}
                animate={{clipPath: "polygon(0 100%, 0 100%, 0 100%)"}}
                transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 left-0 bottom-0 right- 0 w-screen h-screen z-10 bg-gray-500"
                initial={{clipPath: "polygon(0 0, 0 100%, 100% 0)"}}
                animate={{clipPath: "polygon(0 0, 0 0, 0 0)"}}
                transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 left-0 bottom-0 right- 0 w-screen h-screen z-10 bg-gray-500"
                initial={{clipPath: "polygon(100% 100%, 0% 100%, 100% 0)"}}
                animate={{clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)"}}
                transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
            />
        </>
    )*/
}

export default TransitionEffect
