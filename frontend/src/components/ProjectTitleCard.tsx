import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react";
import ProjectTexts from "./ProjectTexts";
import ProjectImages from "./ProjectImages";
import { useScrollCustom } from "../components/NavScrollContext";

const titletext = "Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work ";

const ProjectTitleCard = () => {
  const textPathRef = useRef<SVGTextPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollCustom();

  const { scrollYProgress: scrollYProgressBG } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: scrollYProgressExit } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundColor = useTransform( scrollYProgressBG, [0, 0.47, 0.53, 1], ["#6d4884", "#6d4884", "#f3f3f3", "#f3f3f3"]);
  const inOpacity = useTransform(scrollYProgressExit, [0, 0.8, 1], [0, 0, 1]);
  const y = useTransform(scrollYProgressBG, [0, 0.6, 1], [-140, -120, 1]);

  useEffect(() => {
    registerSection("projects", projectsSectionRef);
  }, []);

  useEffect(() => {
    const animatetext = scrollYProgressBG.on("change", (latest) => {
        textPathRef.current?.setAttribute("startOffset","-" + latest * 600 + "");

        if(latest > 0.47) {
          textPathRef.current?.setAttribute("stroke", "#6d4884");
          textPathRef.current?.setAttribute("fill", "#6d4884");
        }
        else {
          textPathRef.current?.setAttribute("stroke", "#f3f3f3");
          textPathRef.current?.setAttribute("fill", "#f3f3f3");
        }
    });

    return () => animatetext();
  }, [scrollYProgressBG]);

  return (
    <motion.div ref={projectsSectionRef} className="w-[100vw] z-50 bg-indigoCustom-400 overflow-y-visible"
    style={{
      backgroundColor,
    }}>
        <motion.div ref={containerRef} className="h-[136vh] w-[100vw] pb-[10vh] flex flex-col justify-between overflow-x-clip"
        style={{
          y
        }}>
            <svg className="h-fit py-12" id="text-container" width="1844" height="541" viewBox="0 0 1844 541" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="curve" d="M0.769492 540.466C775.237 521.987 1089.57 36.6832 1843.43 1.03586" stroke="none"/>
                <text className="text-concreteCustom-100 text-[18vh]">
                    <textPath className="font-customTitle2" ref={textPathRef} id="text-path" href="#curve" startOffset="-100" stroke="#f3f3f3" fill="#f3f3f3">{titletext}</textPath>
                </text>
            </svg>
            <div className="w-full flex flex-col items-center">
              <div className="w-2/3 text-center text-lg space-y-4">
                <p>Glistening dewdrops clung to the petals, reflecting dawn’s first light in a silent dance of color. 
                  The air was thick with the scent of earth and rain, a promise of renewal in the cycle of life.</p>
                <p>Shadows stretched across the empty streets as lanterns flickered against the creeping dusk. Somewhere in the distance, a clock chimed, marking the passage of another forgotten hour. 
                  The city, once alive with voices, now whispered only to the wind.</p>
              </div>
            </div>
        </motion.div>
        <div className="h-[530vh] w-full flex items-start pt-[30vh]">
         <ProjectTexts/>
         <ProjectImages/>
        </div>
    </motion.div>
  )
}

export default ProjectTitleCard