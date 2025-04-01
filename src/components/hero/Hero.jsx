import './hero.css'
import {motion} from 'framer-motion'


const Hero = () => {
    return (
        <motion.div
        // animate={{
        //   scale: [0, 0, 0, 1.2, 1],
        // //   rotate: [0, 360, 0, 0],

          
        // }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        
        transition={{
            // duration: .8,
            // ease: "easeInOut",
            // times: [0, 0.2, 0.5, 0.8, 1],
            // repeat: onc,
            type: "spring",
            stiffness: 400,
            // repeatDelay: 1
          }}
       className='hero-container'>
            <img className='hero-img' src="/images/LegatoStu.png" alt="" />
            {/* <img className='hero-img' src="/images/[le∙ga∙to] noun.png" alt="" /> */}
        </motion.div>
    )
}

export default Hero