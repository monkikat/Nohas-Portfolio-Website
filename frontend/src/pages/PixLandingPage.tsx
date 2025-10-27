import PixPortraitCard from "../components/PixPortraitCard"
import cloud1 from "../assets/cloud1.svg";
import cloud2 from "../assets/cloud2.svg";
import PixIntroPage from "./PixIntroPage";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useMemo } from "react";

// Cloud configuration for efficient, random animations
interface CloudConfig {
    id: number;
    src: string;
    size: number; // height in rem
    yPosition: string; // vertical position
    direction: 'left' | 'right'; // animation direction
    duration: number; // animation duration in seconds
    delay: number; // initial delay in seconds
}

const PixLandingPage = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yintroCrd = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.6, 0.8], [1, 1, 0]);

    // Generate cloud configurations with staggered start positions
    const clouds = useMemo<CloudConfig[]>(() => [
        {
            id: 1,
            src: cloud1,
            size: 3,
            yPosition: '15vh',
            direction: 'left',
            duration: 22,
            delay: 0
        },
        {
            id: 2,
            src: cloud2,
            size: 2.5,
            yPosition: '45vh',
            direction: 'right',
            duration: 20,
            delay: 0
        },
        {
            id: 3,
            src: cloud1,
            size: 2,
            yPosition: '75vh',
            direction: 'left',
            duration: 24,
            delay: 0
        }
    ], []);

    return (
        <div ref={ref} className="h-[280vh]">
            <div className="h-[100vh] sticky top-0 p-8 overflow-x-clip">
                {/* Efficient cloud animations - 2-3 clouds at a time */}
                {clouds.map((cloud) => {
                    const startPos = cloud.direction === 'left' ? "-20%" : "120vw";
                    const endPos = cloud.direction === 'left' ? "120vw" : "-20%";
                    
                    return (
                        <motion.img
                            key={cloud.id}
                            className="absolute z-10 will-change-transform"
                            src={cloud.src}
                            style={{
                                height: `${cloud.size}rem`,
                                top: cloud.yPosition
                            }}
                            initial={{ x: startPos }}
                            animate={{ x: endPos }}
                            transition={{
                                duration: cloud.duration,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: 0
                            }}
                        />
                    );
                })}
                
                <div className="absolute inset-0 h-[100vh] w-full bg-[linear-gradient(to_right,#eff5ff60_1.5px,transparent_1.5px),linear-gradient(to_bottom,#eff5ff60_1.5px,transparent_1.5px)] bg-[size:36px_36px]">
                    <div className="relative h-full w-full bg-gradient-to-t from-custBlue-200 p-12 text-center">
                        <motion.div
                            className="relative flex flex-col z-10 h-full w-full items-center justify-center space-y-8"
                            style={{ opacity }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="flex font-pixelify text-[12vh] font-bold uppercase md:text-[20vh]"
                            >
                                <p className="text-custWhite-100">Noha Haneen</p>
                                <p className="absolute -translate-y-2 bg-gradient-to-b from-custPurple-400 via-custPurple-400 to-custPink-200 text-transparent bg-clip-text inline-block">
                                    Noha Haneen
                                </p>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="font-pixelify text-xl uppercase md:text-4xl"
                            >
                                Web Developer & Designer
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-custWhite-100 px-4 font-pixelify py-1 border-2 border-custPurple-400 rounded-2xl text-md uppercase cursor-pointer hover:bg-custBlue-100 transition-colors duration-300 md:text-lg md:px-6 md:py-2"
                            >
                                Contact Me
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            <div className="absolute z-30 w-full flex flex-col items-center justify-between">
                <div className="h-[80vh] flex items-center">
                    <PixPortraitCard />
                </div>
                <motion.div style={{ y: yintroCrd }}>
                    <PixIntroPage />
                </motion.div>
            </div>
        </div>
    );
};

export default PixLandingPage;
