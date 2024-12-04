
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const Footer = () => {
    const [CurrentTime, setCurrentTime] = useState(new Date());

    return (
        <div className='bg-gradient-to-br min-h-screen from-blue-900 via-indigo-900 to-purple-900 pt-16 pb-8 relative overflow-hidden'>

            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
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

        </div>

    )
}

export default Footer;