import proj1Display1 from "../assets/SpaceM1.png";
import proj2Display1 from "../assets/EventM1.png";
import proj3Display1 from "../assets/todayAPOD.png"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Project1Display = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const stickyRef1 = useRef<HTMLDivElement>(null);
  const stickyRef2 = useRef<HTMLDivElement>(null);
  const stickyRef3 = useRef<HTMLDivElement>(null);
  const relRef1 = useRef<HTMLDivElement>(null);
  const relRef2 = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"]
  })
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: relRef1,
    offset: ["end end", "end start"]
  })

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: relRef2,
    offset: ["start end", "end start"]
  })

  const opacityFadeOut = useTransform(scrollYProgress1, [0, 0.32, 0.34], [1, 1, 0]);
  const opacityFadeIn = useTransform(scrollYProgress1, [0, 0.34, 0.36], [0, 0, 1]);
  const scale = useTransform(scrollYProgress1, [0, 0.15, 1], [0.5, 1, 1])

  return (
    <div className="flex relative h-[600vh] justify-between "
    ref={parentRef}>
      <motion.div className="relative basis-1/2 h-[200vh] z-10"
      ref={relRef1}
      style={{scale,
        opacity: opacityFadeOut
              }}>
        <motion.div className="sticky top-0 h-[100vh]"
        ref={stickyRef1}>
          <img src={proj1Display1}
            className="h-[100vh] object-cover"/>                  
        </motion.div>
      </motion.div>
      <div className="absolute w-1/2 h-[400vh] z-0"
      ref={relRef2}>
        <motion.div className="sticky top-0 h-[100vh]"
        ref={stickyRef1}
        style={{
          opacity: opacityFadeIn
        }}>
          <img src={proj2Display1}
            className="h-[100vh] object-cover"/>               
        </motion.div>
      </div>
    </div>
  )
}

export default Project1Display