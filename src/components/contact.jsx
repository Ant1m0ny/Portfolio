import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Phone, Mail, MapPin } from 'lucide-react'
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {

    const [isSubmited, setIsSubmited] = useState(false);

    const ContactInfo = [
        { icon: <Mail className="w-5 h-5" />, text: "camille.gaudillot@gmail.com" },
        { icon: <MapPin className="w-5 h-5" />, text: "France , Lyon" }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(true);
        setTimeout(() => setIsSubmited(false), 5000);
    }
    return (
        <div id="contact" className="min-h-screen p-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">

            <div className='w-full max-w-4xl bg-black/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl '>

                <div className='relative p-8 overflow-hidden'>
                    <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >

                        <h2 className="text-3xl font-bold text-white mb-4" >Contactez-moi</h2>
                        <p className='text-blue-200 mb-6'>Transformez vos idées en projets web innovants et performants. Contactez-moi pour créer des solutions sur mesure qui répondent à vos besoin et offre à vos utilisateurs une expérience unique.</p>
                    </motion.div>

                    {ContactInfo.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex items-center text-blue-300 mb-4"
                            >
                                {item.icon}
                                <span className="ml-2">{item.text}</span>
                            </motion.div>
                        )
                    })}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400 rounded-full"
                            initial={{
                                x: Math.random() * 300 - 150,
                                y: Math.random() * 300 - 150,
                                scale: 0,
                            }}
                            animate={{
                                x: Math.random() * 300 - 150,
                                y: Math.random() * 300 - 150,
                                scale: Math.random() * 1.5,
                                opacity: Math.random(),
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    ))}


                </div>
                <div className='p-8 bg-white/10 backdrop-blur-md'>
                    <AnimatePresence>
                        {!isSubmited ? (
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div className="">
                                    <label htmlFor="name" className="block text-sm font-medium text-blue-200"> Nom </label>
                                    <Input required id="name" name="name" placeholder="Votre nom" className="mt-1  bg-white/5  border-blue-500/30 text-white placeholder-blue-300"></Input>
                                </div>
                                <div className="">
                                    <label htmlFor="Email" className="block text-sm font-medium text-blue-200"> Email </label>
                                    <Input required id="Email" name="Email" placeholder="exemple@exemple.com" className="mt-1  bg-white/5  border-blue-500/30 text-white placeholder-blue-300"></Input>
                                </div>
                                <div className="">
                                    <label htmlFor="message" className="block text-sm font-medium text-blue-200"> Message </label>
                                    <Textarea required id="message" rows={4} name="Email" placeholder="Votre message ici ..." className="mt-1  bg-white/5  border-blue-500/30 text-white placeholder-blue-300"></Textarea>
                                </div>
                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-full transition-colors duration-300">
                                    <Send className="w-5 h-5 mr-2" />
                                    Envoyer
                                </Button>


                            </motion.form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                className="text-center py-16"
                            >
                                <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Message Envoyé !</h3>
                                <p className="text-blue-200">Merci pour votre message. Je vous répondrai bientôt.</p>
                            </motion.div>
                        )}


                    </AnimatePresence>

                </div>

            </div>

        </div>


    )
}


export default Contact;