import { motion } from "motion/react"
import ProPicCard from "../components/ProPicCard"
import IntroPage from "./IntroPage"
import { useScrollCustom } from "../components/NavScrollContext";

const LandingPage = () => {
  const { scrollToSection } = useScrollCustom();

  return (
    <div className="flex flex-col h-[400vh] w-full">
      <div className="h-[100vh] sticky top-0 w-full py-[12vh] text-[18vh] flex flex-col items-center justify-between">
        <div className="text-sm text-center space-y-1 pt-12">
          <motion.p className=""
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1,
            transition:{
              duration: 0.6,
              delay: 0.3
            }
          }}>Noha Haneen</motion.p>
          <motion.p className="opacity-60 hover:cursor-pointer"
          initial={{
            opacity:0
          }}
          animate={{
            opacity:0.6,
            transition:{
              duration:0.6,
              delay: 0.3
            }
          }}
          onClick={() => scrollToSection("contact")}>Contact Me</motion.p>
        </div>
        <div className="text-[20vh] font-customTitle2 font-bold flex flex-col text-center">
          <div className="overflow-hidden">
            <div className="h-fit translate-y-4">
              <motion.p
              initial={{
                y: 130,
                scale: 0.8
              }}
              animate={{
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.6
                }
              }}>WEB DEVELOPER</motion.p>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="h-fit -translate-y-4">
              <motion.p
              initial={{
                y: -130,
                scale: 0.8
              }}
              animate={{
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.6
                }
              }}>& DESIGNER</motion.p>
            </div>
          </div>
          </div>
      </div>
      <ProPicCard/>
      <IntroPage/>
    </div>
  )
}

export default LandingPage