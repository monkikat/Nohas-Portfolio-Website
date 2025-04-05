import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react"

const IntroPage = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"]
  });

  const backgroundColor = useTransform( scrollYProgress, [0, 0.05, 0.15, 1], ["#f3f3f3", "#f3f3f3", "#6d4884", "#6d4884"]);
  const textColor = useTransform(scrollYProgress, [0, 0.05, 0.15, 1], ["#6d4884", "#6d4884", "#f3f3f3", "#f3f3f3"]);
  const textOpacity= useTransform(scrollYProgress, [0, 0.3, 0.4, 1], [0, 0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.8, 0.9, 1], [0, 0, 0, -10]);

  return (
    <div ref={parentRef} 
    className="h-[400vh] border-t-2 bg-concreteCustom-100 border-indigoCustom-400">
      <div className="h-[250vh] bg-indigoCustom-400">
        <motion.div className="h-[100vh] p-[18vh] w-full sticky bg-concreteCustom-100 top-0 flex flex-col items-center justify-between"
        style={{
          backgroundColor,
          color: textColor,
        }}>
          <div className="h-1/2 p-6 flex flex-col justify-start space-y-12 w-2/3">
            <div className="text-[6vh] font-semibold text-center">
              <p>From concepts to code,</p>
              <p>I bring ideas to life.</p>
            </div>
            <motion.div className="text-lg space-y-6 text-center"
            style={{
              opacity: textOpacity
            }}>
              <p>Glistening dewdrops clung to the petals, reflecting dawn’s first light in a silent dance of color. 
                The air was thick with the scent of earth and rain, a promise of renewal in the cycle of life.</p>
              <p>Shadows stretched across the empty streets as lanterns flickered against the creeping dusk. Somewhere in the distance, a clock chimed, marking the passage of another forgotten hour. 
                The city, once alive with voices, now whispered only to the wind.</p>
              <p>Glistening dewdrops clung to the petals, reflecting dawn’s first light in a silent dance of color.</p>
              <p>Glistening dewdrops clung to the petals, reflecting dawn’s first light in a silent dance of color. 
                The air was thick with the scent of earth and rain, a promise of renewal in the cycle of life.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default IntroPage