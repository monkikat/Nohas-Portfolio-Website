import { motion, useInView, useScroll, useTransform } from "motion/react";
import profilePic from "../assets/profilePic.jpg";
import { useEffect, useRef } from "react";

const introtext1 = "Hi, I’m Noha, a Freelance Web Developer and Designer based in Houston, TX. I create visually appealing and responsive websites, and enjoy bringing fun and creative ideas to life."

const IntroComponent = () => {

    return (
      <motion.div className="relative h-[200vh] pt-36 md:pt-48 bg-yellowCustom-100">
        <div className="sticky flex flex-col h-[100vh] top-0 mx-24 md:mx-36 p-36 space-y-4 justify-between items-center">
          <img src={profilePic} alt="Hi!" 
          className="h-48 md:h-56 w-48 md:w-56 rounded-full"/>
          <motion.div 
          className="text-3xl md:text-4xl text-center
          relative block overflow-hidden">
            <motion.div
            >
              {introtext1}
            </motion.div>
          </motion.div> 
          <div className="flex flex-col w-full items-end text-xs md:text-sm">
            <p>My Technical Skills</p>
            <p>Projects</p>
            <p>Contact Me</p>
          </div> 
        </div>
      </motion.div>
    )
  }
  
  export default IntroComponent