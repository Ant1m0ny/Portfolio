"use client";

import React, { useState, useEffect } from 'react'
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const CreativeName = () => {
    return (
        <div className='relative font-bold text-4xl md:text-6xl text-white overflow-hidden'>
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}

            >
                Camille
            </motion.div>
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}

            >
                Gaudillot
            </motion.div>
        </div>

    )
}

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handlerScrollifiers = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handlerScrollifiers)
    }, [])
    const NavItems = ["Accueil", "Projets", "Services", "Compétences", "Contact"]

    return (
        <div className='relative min-h-screen flex flex-col'>

            <motion.header
                className={`fixed w-full py-4 transition-all duration-300 z-50  ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-purple-900"}`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">

                    <motion.div
                        className="text-2xl font-bold  text-white flex items-center space-x-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span>Camille Gaudillot </span>
                    </motion.div>
                    <nav className="hidden md:flex space-x-6">
                        {NavItems.map((item, index) => {
                            return (
                                <motion.a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white hover:text-purple-300 transition-colors relative group"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}


                                >{item}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    ></motion.span>

                                </motion.a>
                            )
                        })}

                    </nav>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={"ghost"} size={"icon"} className="md:hidden">
                                <Menu className='h-5 w-5 text-white' />
                                <span className="sr-only"
                                >Open Menu</span>
                            </Button>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end' className='w-52 bg-black/50 backdrop-blur-md  border-purple-500' >
                            {NavItems.map((item, index) => {
                                return (
                            
                                    <DropdownMenuItem key={index}  className="text-white hover:text-purple-300 focus:text-purple-300 focus:bg-white/10">

                                        <a>{item}</a>
                                    </DropdownMenuItem>
                                )
                            })}
                        </DropdownMenuContent>


                    </DropdownMenu>


                </div>

            </motion.header>

            <div id="accueil" className="flex-grow flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
                <div className="container mx-auto px-4 z-10">
                    <div className="flex flex-col items-center text-center">

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <CreativeName />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-2xl md:text-3xl text-purple-300 mb-6"
                        >
                            Développeuse Web Full-stack
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg text-blue-200 mb-8 max-w-2xl"
                        >
                            Dans le cadre de ma formation Bac +2 en développement web et conception numérique, dispensée par OpenClassrooms, j'ai acquis des compétences solides dans le domaine de la création et de la gestion de sites web ainsi que dans le développement d'applications interactives. Cette formation, à la fois théorique et pratique, m'a permis de maîtriser les langages de programmation tels que HTML, CSS, JavaScript, ainsi que des outils de développement modernes comme Git et les systèmes de gestion de contenu.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"


                        >
                            <a href="#projets">
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="lg" >
                                    Voir mes Projets
                                </Button>
                            </a>
                            <a href="#contact">
                                <Button className="text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-purple-900" size="lg">
                                    Me Contacter
                                </Button>
                            </a>
                        </motion.div>

                    </div>


                </div>


            </div>




        </div>
    )
}

export default Header