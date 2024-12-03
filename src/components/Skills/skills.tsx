import { motion } from "framer-motion"
import { CodepenIcon as ReactIcon, PiIcon as PythonIcon } from "lucide-react";


const Skills = () => {

    const Skill = [
        {
            icon: <ReactIcon className="w-12 h-12 text-[#61DAFB]"></ReactIcon>,
            title: "React.Js",
            description: "Experienced In creating dynamic and reactive web applications with React.js Focusing  on Client side rendering for optimal performance "
        },
        {
            icon: <ReactIcon className="w-12 h-12 text-[#61DAFB]"></ReactIcon>,
            title: "Tailwind Css",
            description: "Proficient in using Tailwind Css to quickly design custom  and  responsive interfaces, ensuring a modern UI development based  utility classes ",
        },
        {
            icon: <PythonIcon className="w-12 h-12 text-[#3776AB]"></PythonIcon>,
            title: "Python",
            description: "Mastery  Of  python programing for various applications , from web backend development to artificial  intelligence with a focus  on clean and automation",
        }
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

        <div className="min-h-screen p-8 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
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
                        I love Working with ...
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