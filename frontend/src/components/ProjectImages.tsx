import { useEffect, useRef } from 'react'

import orangeMoonsImg from "../assets/1.1.png";
import moonImg from "../assets/1.2.png";
import apodImg from "../assets/1.3.png";
import eventImg from "../assets/2.1.png";
import eventContactImg from "../assets/2.2.png";
import eventGif from "../assets/2.3.gif";
import parallaxGif from "../assets/3.1.gif";
import eyeGif from "../assets/3.2.gif";

import { motion, useAnimation, useScroll, useTransform } from 'motion/react';

const ProjectImages = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const { scrollYProgress: scrollYProgressBG } = useScroll({
        target: containerRef,
        offset: ["end end", "end start"]
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress2, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
    const y = useTransform(scrollYProgress2, [0, 0.1, 0.9, 1], [-100, 0, 0, -300]);
    const opacity = useTransform(scrollYProgress2, [0, 0.1, 0.9, 0.95, 1], [0, 1, 1, 0, 0]);

    const animator = useAnimation();

    useEffect(() => {
        const animateImagesIn = scrollYProgress.on("change", (latest) => {

            if (latest > 0.04) {
                animator.start({
                    opacity: 1,
                    transition: {
                        duration: 0.4
                    }
                });
            } else {
                animator.start({
                    opacity: 0,
                    transition: {
                        duration: 0.4
                    }
                });
            }
        });

        return () => animateImagesIn();
    });

  return (
    <motion.div ref={containerRef} className='absolute h-[500vh] w-4/9 flex flex-col right-0 flex-1 items-center space-y-18 justify-between'
    style={{
        scale,
        y,
        opacity
    }}
    animate={animator}>
       <div id='proj1ImgContainer' className='w-[28vw] overflow-x-visible h-[180vh] space-y-18 flex flex-col flex-1 '>
            <img src={moonImg} 
                className='object-cover w-full rounded-lg'/>
            <img src={apodImg} 
                className='object-cover w-full rounded-lg'/>
            <img src={orangeMoonsImg} 
                className='object-cover w-full rounded-lg'/>
       </div>
       <div id='proj2ImgContainer' className='w-[30vw] overflow-x-visible h-[160vh] space-y-18 flex flex-col flex-1 '>
            <img src={eventContactImg} 
                className='object-cover w-full rounded-lg'/>
            <img src={eventGif} 
                className='object-cover w-full rounded-lg'/>
            <img src={eventImg} 
                className='object-cover w-full rounded-lg'/>
            
       </div>
       <div id='proj3ImgContainer' className='w-[30vw] overflow-x-visible h-[160vh] space-y-18 flex flex-col flex-1'>
            <img src={parallaxGif} 
                className='object-cover w-full rounded-lg'/>
            <img src={eyeGif} 
                className='object-cover scale-50 w-full rounded-lg'/>
            <img src={eyeGif} 
                className='object-cover w-full rounded-lg'/>
       </div>
    </motion.div>
  )
}

export default ProjectImages