import { motion, useAnimation, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react"
import { useScrollCustom } from "../components/NavScrollContext";

const introText = `I hold a Master’s in Computer Science, and I use that foundation every day — whether I’m coding, or building something new from scratch.  
I’m also a part-time math instructor. Teaching keeps me thinking critically and always looking for smart, simple solutions.`;

const introText1 = `Hi, I’m Noha — a freelance web developer and designer based in Houston.`
const introText2 = `I love bringing creativity to life through clean, responsive, and visually engaging websites. Creativity is what drives me, whether I’m designing a landing page, building out interactive components, or just sketching new UI ideas.`
const introText3 = `I have created and integrated REST APIs, built out full-stack features, and handled backend tasks like form handling, data storage, and sending email notifications — essentially, I like making sure the stuff behind the scenes runs just as smoothly as the front.`
const introText4 = `If I’m not coding, I’m probably designing, planning a fun side project, or figuring out a better way to do something I just did last week. Always learning, always building.`;

const IntroPage = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const animator = useAnimation();  
  const text1Letters = introText1.split("");
  const { registerSection } = useScrollCustom();
  
    useEffect(() => {
        registerSection("about", aboutSectionRef);
    }, []);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"]
  });

  const backgroundColor = useTransform( scrollYProgress, [0, 0.05, 0.15, 1], ["#f3f3f3", "#f3f3f3", "#6d4884", "#6d4884"]);
  const textColor = useTransform(scrollYProgress, [0, 0.05, 0.15, 1], ["#6d4884", "#6d4884", "#f3f3f3", "#f3f3f3"]);
  const textOpacity= useTransform(scrollYProgress, [0, 0.3, 0.4, 1], [0, 0, 1, 1]);

  return (
    <div ref={parentRef} 
    className="h-[350vh] border-t-2 bg-concreteCustom-100 border-indigoCustom-400">
      <div ref={aboutSectionRef} className="h-[200vh] bg-indigoCustom-400">
        <motion.div className="h-[110vh] p-[18vh] w-full sticky bg-concreteCustom-100 top-0 flex flex-col items-center justify-between"
        style={{
          backgroundColor,
          color: textColor,
        }}>
          <div className="h-1/2 p-6 flex flex-col items-center space-y-18 w-3/4">
            <div className="text-[6vh] font-semibold text-center">
              <p>From concepts to code,</p>
              <p>I bring ideas to life.</p>
            </div>
            <div className="text-center space-y-8">
              <motion.p className=""
              initial={{
                y: 20,
                opacity: 0
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.3,
                delay: 0.4

              }}>{introText1}</motion.p>
              <motion.p className=""
              initial={{
                y: 20,
                opacity: 0
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.3,
                delay: 0.5
              }}>{introText2}</motion.p>
              <motion.p className=""
              initial={{
                y: 20,
                opacity: 0
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.3,
                delay: 0.6
              }}>{introText3}</motion.p>
              <motion.p className=""
              initial={{
                y: 20,
                opacity: 0
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.3,
                delay: 0.7
              }}>{introText4}</motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default IntroPage