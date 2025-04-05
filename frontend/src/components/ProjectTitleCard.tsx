import { use, useEffect, useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { select, text } from "motion/react-client";

const titletext = "Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work Recent Work ";

const ProjectTitleCard = () => {
  const textPathRef = useRef<SVGTextPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundColor = useTransform( scrollYProgress, [0, 0.51, 0.54, 1], ["#6d4884", "#6d4884", "#f3f3f3", "#f3f3f3"]);

  useEffect(() => {
    const animatetext = scrollYProgress.on("change", (latest) => {
        textPathRef.current?.setAttribute("startOffset","-" + latest * 600 + "");

        if(latest > 0.51) {
          textPathRef.current?.setAttribute("stroke", "#6d4884");
          textPathRef.current?.setAttribute("fill", "#f3f3f3");
        }
        else {
          textPathRef.current?.setAttribute("stroke", "#f3f3f3");
          textPathRef.current?.setAttribute("fill", "#f3f3f3");
        }
    });

    return () => animatetext();
  }, [scrollYProgress]);

  return (
    <motion.div className="h-[150vh] bg-indigoCustom-400"
    style={{
      backgroundColor
    }}>
        <motion.div ref={containerRef} className="h-[100vh] overflow-x-clip -translate-y-36">
            <svg className="pt-18" id="text-container" width="1844" height="541" viewBox="0 0 1844 541" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="curve" d="M0.769492 540.466C775.237 521.987 1089.57 36.6832 1843.43 1.03586" stroke="none"/>
                <text className="text-concreteCustom-100 text-[12vh] -translate-x-48">
                    <textPath className="stroke-2" ref={textPathRef} id="text-path" href="#curve" startOffset="-100" stroke="#f3f3f3" fill="#f3f3f3">{titletext}</textPath>
                </text>
            </svg>
        </motion.div>
    </motion.div>
  )
}

export default ProjectTitleCard