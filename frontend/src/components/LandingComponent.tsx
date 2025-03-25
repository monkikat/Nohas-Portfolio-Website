import { motion, useInView, useScroll, useTransform } from 'motion/react';
import CloudComponent from "./CloudComponent"
import floatingCat from '../assets/FloatingCat.svg'
import { useRef } from 'react';
import { easeOut } from 'motion';


const LandingComponent = () => {

    const parentRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -600]);
    const x = useTransform(scrollYProgress, [0, 1], [100, -600]);
    const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0.2, 0.6, 1.5])

  return (
    <div className="relative h-[230vh]">
        <div className="flex flex-col justify-center sticky h-[100vh] top-0 space-y-2 ">
            <div className="text-7xl md:text-9xl mx-12 md:mx-12 px-2 md:px-4">
                <h1>Noha</h1>
                <h1>Haneen</h1>
            </div>
            <div className="justify-between space-x-12 flex-col md:flex md:flex-row mx-12 md:mx-12 px-2 md:px-4 z-20">
                <p className="text-3xl md:text-4xl">Web Developer and Designer</p>
                <div className="flex md:basis-1/3 justify-start md:justify-between text-xs md:text-sm space-x-4 py-6">
                    <a href="https://github.com/monkikat" target="_blank">GitHub</a>
                    <p>|</p>
                    <a href="https://www.linkedin.com/in/noha-haneen/" target="_blank">LinkedIn</a>
                    <p>|</p>
                    <p>Gmail</p>
                </div>
            </div>
            <div>
                <CloudComponent/>
            </div>     
        </div>
        <motion.div className='absolute flex justify-end h-[100vh] w-full -z-40 right-0'
        ref={parentRef}
        >
            <motion.img src={floatingCat} alt='h-48 meow'
            style={{
                x,
                y,
                scale
            }}
            transition={{
                ease: easeOut
            }}/>
        </motion.div>
    </div>
  )
}

export default LandingComponent