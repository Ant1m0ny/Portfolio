"use client";
import Header from "@/components/Projets/header";
import Projects from "@/components/Projets/projets";
import Skills from "@/components/Skills/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { motion } from "framer-motion"
import { Code2, Smartphone, Palette, Rocket } from "lucide-react"

export default function Home() {

  const services = [
    {
      title: "Développement Web",
      icon: <Code2 className="w-8 h-8" />,
      description: "Création des sites web modernes  , réactifs et performants avec les nouvelles technologies"
    },
    {
      title: "Gestion de bases de données",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Conception, optimisation et intégration de bases de données relationnelles SQL et NoSQL"
    },
    {
      title: "Intégration API",
      icon: <Palette className="w-8 h-8" />,
      description: "Compétence dans l'intégration d'APIs RESTful pour connecter des services externes et enrichir les fonctionnalités des applications"
    },
    {
      title: "Optimisation des Performances",
      icon: <Rocket className="w-8 h-8" />,
      description: "Amélioration de la vitesse  et des performances de vos applications web et mobiles existantes "
    }

  ]
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {

        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <>
      <Header></Header>
      <div id="services" className="min-h-screen p-8 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duartion: 0.5 }}
            className="mb-12 text-center"
          >
            <motion.span
              className="iniline-block  px-4 py-1 mb-4 text-sm font-medium text-indigo-200 bg-indigo-800 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Services Professionels

            </motion.span>
            <h2 className='text-4xl font-bold text-white md:text-5xl'> Mes Services </h2>

          </motion.div>
          <motion.div

            variants={containerVariants}
            initial='hidden'
            animate="visible"
            className="grid gap-8 md:grid-cols-2"

          >
            {services.map((service, index) => {
              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.03 }} className="p-6 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/15 hover:shadow-xl" >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-16 h-16 mb-4 text-indigo-300 bg-indigo-800 rounded-full">

                    {service.icon}
                  </motion.div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-indigo-200">{service.description}</p>

                </motion.div>
              )
            })}




          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
              Contactez-moi
            </motion.a>
          </motion.div>


        </div>
      </div >
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>

    </>

  );
}
