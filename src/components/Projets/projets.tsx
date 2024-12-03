"use client";


import {motion} from "framer-motion";

const Projects = () => {

    return (
        <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-indigo-900 overflow-hidden relative">

            {[...Array(50)].map((_, i)  => { 
                    return (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                scale: Math.random() * 0.5 + 0.5,
                                }}
                                animate={{
                                    y: [null, "-100%"],
                                    opacity: [0, 1, 0],
                                  }}
                                transition={{
                                    duration: Math.random() * 10  +20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >   </motion.div>         
                    )

        })}

        </div>

    )
}

export default Projects;