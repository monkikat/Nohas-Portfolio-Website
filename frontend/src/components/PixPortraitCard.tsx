import { motion } from "motion/react";
import profileImg from "../assets/profilePic.jpg";

import smileIcon from "../assets/speech_bubble.svg"

const PixPortraitCard = () => {

  return (
    <div className="flex w-fit">
        <motion.div 
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 0.18,
            delay: 0.6
        }}>
            <div className="absolute -translate-x-8">
                <img src={smileIcon} className="h-16"/>
            </div>
            <p className="absolute py-3 font-bold text-xl">: )</p>
        </motion.div>
        <div className="bg-custWhite-100 border-2 border-custPurple-300 rounded-full p-2">
            <img className="h-48 object-cover rounded-full md:h-64" src={profileImg}/>
        </div>
    </div>
  )
}

export default PixPortraitCard