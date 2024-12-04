"use client";


import { motion } from "framer-motion";
import { Rocket, PlaneTakeoff, Star } from "lucide-react"

const Projects = () => {
    const projects = [
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "SpaceX Launch Tracker",
            description: "A real time Dashboard for Tracking Space X launches and statistics ",
            link: "#Space_tracker"
        },
        {
            icon: <PlaneTakeoff className="w-8 h-8" />,
            title: "Exo Planer Exeplorer",
            description: "A real time Dashboard for Tracking Space X launches and statistics ",
            link: "#Space_tracker"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Micro services Explosion",
            description: "A real time Dashboard for Tracking Space X launches and statistics ",
            link: "#Space_tracker"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Docker & Kubernetes",
            description: "A real time Dashboard for Tracking Space X launches and statistics ",
            link: "#Space_tracker"
        }
    ]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }
    return (
        <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-indigo-900 overflow-hidden relative">

            {[...Array(50)].map((_, i) => {
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
                            duration: Math.random() * 10 + 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >   </motion.div>
                )

            })}
            <div className="max-w-6xl mx-auto relative z-10">


                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >

                    <motion.span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-purple-200 bg-purple-800 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }} >
                        Realised Projects



                    </motion.span>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">My Creations</h2>

                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-8 md:grid-cols-2"
                >

                    {projects.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/15 hover:shadow-xl group"
                            >
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                    className='flex items-center justify-center w-16 h-16 mb-4 text-purple-300 bg-purple-800 rounded-full group-hover:text-yellow-300'
                                >
                                    {project.icon}

                                </motion.div>
                                <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-purple-200 group-hover:text-white transition-colors">
                                    {project.description}
                                </p>
                                <motion.a
                                    href={project.link}
                                    className='inline-block px-4 py-2 text-sm font-medium text-white transition-colors bg-purple-700 rounded-full hover:bg-purple-600 '
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore For more

                                </motion.a>

                            </motion.div>
                        )
                    })}

                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mt-12 text-center'
                >

                <motion.a
                            href="#all-projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white transition-colors bg-indigo-600 rounded-full hover:bg-indigo-700"
                        >
                             <span>Voir Tous les Projets</span>
                             <Rocket className="w-5 h-5 ml-2"/>
                </motion.a>

                </motion.div>
            </div>

        </div>
    )
}

export default Projects;