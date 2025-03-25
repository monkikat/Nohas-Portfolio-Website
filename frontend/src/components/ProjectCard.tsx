import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ProjectCardtype } from "../types/ProjectCardType";


const ProjectCard = ({imgSrc, descr, title, techs, gitLink, liveLink} : ProjectCardtype) => {

    const parentRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ["start end",  "end start"]
    });

    const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.45, 0.85, 0.9], [0, 0, 1, 0, 0]);
    const yTranslateText = useTransform(scrollYProgress, [0, 0.3, 0.45, 0.85, 0.9], [100, 100, 0, 0, -100]);

  return (
    <div className="relative h-[100vh]"
    ref={parentRef}>
        <div className="sticky top-0 flex h-[100vh]">
            <div className="flex-start w-1/2 h-[100vh]">
                <img src={imgSrc} 
                className="object-cover h-[100vh]"/>
            </div>
            <motion.div className="flex flex-col w-1/2 justify-center items-center h-[100vh]"
            style={{
                opacity: opacityText,
                y: yTranslateText
            }}
            transition={{
                duration: 0.8,
                ease: "easeInOut"
            }}>
                <div className="flex flex-col w-1/3 text-center space-y-12">
                    <div className="space-y-4">
                        <p className="text-4xl">{title}</p>
                        <p className="text-sm">{descr}</p>
                        <p className="text-sm">{techs}</p>
                    </div>
                    <div className="flex justify-center list-none text-sm space-x-4">
                        <li>
                            <a href={gitLink}>View Code</a>
                        </li>
                        <li>
                            <p>|</p>
                        </li>
                        <li>
                            <a href={liveLink}>Live Site</a>
                        </li>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default ProjectCard