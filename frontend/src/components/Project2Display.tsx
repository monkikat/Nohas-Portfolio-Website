import proj1Display1 from "../assets/SpaceM1.png";
import proj2Display1 from "../assets/EventM1.png";
import proj3Display1 from "../assets/todayAPOD.png"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const images = [proj1Display1, proj2Display1, proj3Display1]; 

const Project2Display = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const stickyRef1 = useRef<HTMLDivElement>(null);
  const stickyRef2 = useRef<HTMLDivElement>(null);
  const stickyRef3 = useRef<HTMLDivElement>(null);
  const relRef1 = useRef<HTMLDivElement>(null);
  const relRef2 = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end start"],
  });


  return (
    <div ref={parentRef} className="relative h-[600vh] flex justify-center items-center">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {images.map((img, index) => {
          const fadeInStart = index * 0.4;
          const fadeOutEnd = fadeInStart + 0.4;
          
          const opacity = useTransform(
            scrollYProgress,
            [fadeInStart, fadeInStart + 0.1, fadeOutEnd, fadeOutEnd + 0.1],
            [0, 1, 1, 0]
          );

          return (
            <motion.img
              key={index}
              src={img}
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ opacity }}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Project2Display