import { motion } from "framer-motion"
import { CodepenIcon as ReactIcon, PiIcon as PythonIcon } from "lucide-react";


const Skills = () => {

    const Skill = [
        {
            icon: <ReactIcon className="w-12 h-12 text-[#61DAFB]"></ReactIcon>,
            title: "React.Js",
            description: "Réalisation d'applications web dynamiques avec React.js, en privilégiant le rendu côté client pour une performance optimale "
        },
        {
            icon: <ReactIcon className="w-12 h-12 text-[#61DAFB]"></ReactIcon>,
            title: "HTML",
            description: "Conception de structures web claires et accessibles avec HTML, en mettant l’accent sur une sémantique soignée pour optimiser la compatibilité et le référencement",
        },
        {
            icon: <ReactIcon className="w-12 h-12 text-[#61DAFB]"></ReactIcon>,
            title: "CSS",
            description: "Réalisation de designs web élégants et adaptatifs avec CSS, en utilisant des techniques de mise en page avancées et des animations pour améliorer l'interaction utilisateur",
        },    
        {
            icon: <ReactIcon className="w-12 h-12 text-[#61DAFB]"></ReactIcon>,
            title: "Javascript",
            description: "Développer des fonctionnalités interactives et dynamiques, en optimisant la performance et l’expérience utilisateur grâce à des scripts performants",
        },
    ]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            },
        },
    }
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }


    return (

        <div id="compétences" className="min-h-screen p-8 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <motion.span
                        className="inline-block px-4 py-1 mb-4 text-sm font-medium text-purple-200 bg-purple-800 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Compétences
                    </motion.span>
                    <h1 className="text-4xl font-bold text-white md:text-5xl">
                        Mes outils
                    </h1>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"

                >
                    {
                        Skill.map((skill, indexation) => {
                            return (
                                <motion.div
                                    key={indexation}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 transition-colors bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/15"
                                >
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 1, type: "spring" }}
                                        className="flex items-center justify-center w-16 h-16 mb-4 rounded-lg bg-white/16"

                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <h2 className="mb-3 text-2xl font-bold text-white ">{skill.title}</h2>
                                    <p className="text-purple-200">{skill.description}</p>


                                </motion.div>
                            )
                        })
                    }

                </motion.div>


            </div>



        </div >

    )

}

export default Skills;