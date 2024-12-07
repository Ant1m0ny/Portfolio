"use client";


import { motion } from "framer-motion";
import { House, Star } from "lucide-react";
import Image from "next/image";


const Projects = () => {
    const projects = [
        {
            icon: <House className="w-8 h-8" />,
            title: "Kasa",
            description: "Le projet Kasa est une application de location d’appartements développée avec React. Il répond aux contraintes d’interactivité et de performance, en utilisant le rendu côté client et la gestion dynamique des données. Les compétences utilisées incluent la création de composants réutilisables, la gestion d'état avec React et l'intégration d'API pour récupérer les informations des logements, tout en assurant une expérience utilisateur fluide et responsive",
            image: "/images/Kasa_Projet.png"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Mon vieux grimoire",
            description: "Le Vieux Grimoire est un projet back-end où j'ai développé un serveur avec Express et MongoDB. Les principaux défis étaient la gestion des opérations CRUD, l’authentification sécurisée des utilisateurs et l’optimisation des images. J'ai utilisé Mongoose, respecté l’architecture MVC et appliqué les bonnes pratiques du Green Code. Ce projet a renforcé mes compétences en Node.js, Express, MongoDB et en création d'API RESTful",
            image: "/images/MVG_Projet.png"
        },
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
        <div id="projets" className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-indigo-900 overflow-hidden relative">

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
                        Projets réalisés



                    </motion.span>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Mes projets</h2>

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
                                <Image src={project.image} alt={project.title} className="mb-4" layout="responsive" width={500} height={300} />

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
                </motion.div>
            </div>

        </div>
    )
}

export default Projects;