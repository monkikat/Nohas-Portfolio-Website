import { useRef } from "react";
import floatingCat from '../assets/floatingCatStill1.png'
import { motion, useScroll } from "motion/react";


const FloatingComponent = () => {
    const catRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: catRef,
    });

    return (
        <motion.div ref={catRef} 
        className="flex justify-end">
            <img src={floatingCat} alt='meow' 
            className=" h-48 md:h-60 px-36"/>
        </motion.div>
    )
}

export default FloatingComponent