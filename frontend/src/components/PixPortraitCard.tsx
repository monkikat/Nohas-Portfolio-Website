import { motion } from "motion/react";
import profileImg from "../assets/profilePic.jpg";
import smileIcon from "../assets/speech_bubble.svg";

const PixPortraitCard = () => {
    return (
        <div className="flex w-fit">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute -translate-x-8 z-10"
            >
                <div className="relative">
                    <img src={smileIcon} className="h-16" alt="Speech bubble" />
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl">: )</p>
                </div>
            </motion.div>
            <motion.div 
                className="bg-custWhite-100 border-2 border-custPurple-300 rounded-full p-2"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 }
                }}
            >
                <img 
                    className="h-48 object-cover rounded-full md:h-64" 
                    src={profileImg}
                    alt="Profile"
                />
            </motion.div>
        </div>
    );
};

export default PixPortraitCard;
