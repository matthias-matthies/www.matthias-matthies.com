"use client";

import {motion} from "framer-motion"
import React from "react";

const TransitionEffect: React.FC = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-blue-500"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "0%"}}
                transition={{duration: 0.5, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "0%"}}
                transition={{delay: 0.1, duration: 0.5, ease: "easeInOut"}}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black"
                initial={{x: "100%", width: "100%"}}
                animate={{x: "0%", width: "0%"}}
                transition={{delay: 0.2, duration: 0.5, ease: "easeInOut"}}
            />
        </>
    )
}

export default TransitionEffect
