"use client";

import {motion} from "framer-motion"
import React, {useState} from "react";

const CookieBanner: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {
                isOpen ?
                <motion.div
                    className="fixed left-0 bottom-0 z-20 bg-blue-500 text-white px-8 py-4"
                    initial={{opacity: "0", transform: "translateY(100px)"}}
                    animate={{opacity: "1", transform: "translateY(0)"}}
                    transition={{duration: 0.8, delay: 0.8, ease: "easeInOut"}}
                >
                    <p>Well, you practically can’t visit a website without tripping over cookie banners these days, so to
                        avoid you feeling neglected, here is mine... But guess what? No cookies here because I do not need
                        to analyse anything about your behaviour on my website.</p>
                    <button className="mr-2 my-1 border border-white cursor-pointer p-1 rounded" onClick={() => setIsOpen(false)}>Ok, cool</button>
                </motion.div>
                : ""
            }
        </>
    )
}

export default CookieBanner
