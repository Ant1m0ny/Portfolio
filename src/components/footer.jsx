
import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import { useEffect } from 'react';


const Footer = () => {
    const [CurrentTime] = useState(new Date());
    const [isDayTime] = useState(true);

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/Ant1m0ny" },
        { icon: <Linkedin className="w-5 h-5"></Linkedin>, href: "https://www.linkedin.com/in/camille-gaudillot/" },
    ]

    return (
        <div className='bg-gradient-to-br  from-blue-900 via-indigo-900 to-purple-900 pt-16 pb-8 relative overflow-hidden'>

            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{
                        x: Math.random() * 100 + "vw",
                        y: Math.random() * 200,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [null, "-100%"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            <div className="max-w-6xl mx-auto px-4 sm:px-6  lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <motion.div
                            className="text-3xl  font-bold text-white mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Camille Gaudillot
                        </motion.div></div>
    
                </div>
                <nav className="space-y-4 text-center md:text-left">
                    {["Accueil", "Projets", "Services", "Compétences", "Contact"].map((item, index) => {
                        return (
                            <motion.a
                                key={item}
                                href={`#${item.toLocaleLowerCase()}`}
                                className="block text-blue-300 hover:text-white transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}

                            >{item}</motion.a>
                        )
                    })}

                </nav>

                <div className="text-center md:text-right">
                    <div className="flex justify-center md:justify-end space-x-4 mb-4">
                        {socialLinks.map((link, index) => {
                            return (

                                <motion.a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">{link.icon}</motion.a>
                            )
                        })}

                    </div>
                    <motion.div
                        className="text-blue-300 flex items-center  justify-center md:justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >

                        {isDayTime ? (<Sun className="w-5 h-5 mr-2 text-yellow-400"></Sun>) : (<Moon className="h-5 w-5 text-blue-400"></Moon>)}
                        <span>{CurrentTime.toLocaleDateString()}</span>
                    </motion.div>


                </div>

            </div>
            <motion.div
                className='mt-8 pt-8 border-t border-blue-800 text-center text-blue-400'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                © {new Date().getFullYear()}  Camille . All right are reserved

            </motion.div>
        </div>

    )
}

export default Footer;