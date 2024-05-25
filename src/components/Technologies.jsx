import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCoreldraw } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVar = (duration) => ({
    initial: {y: -10},
        animate:{
            y:[10,-10],
            transition: {
                duration:duration,
                ease:"linear",
                repeat: Infinity,
                repeatType:"reverse"
            }
        }
    }
    
)

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVar(2.4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            variants={iconVar(3.4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-500 " />
            </motion.div>
            <motion.div
            variants={iconVar(4.8)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl " />
            </motion.div>
            <motion.div
            variants={iconVar(5.4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobephotoshop className="text-7xl text-blue-900" />
            </motion.div>
            <motion.div
            variants={iconVar(6.4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCoreldraw className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            variants={iconVar(7.4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAdobeillustrator className="text-7xl text-orange-500" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies