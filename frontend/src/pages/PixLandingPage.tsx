import PixPortraitCard from "../components/PixPortraitCard"
import cloud1 from "../assets/cloud1.svg";
import cloud2 from "../assets/cloud2.svg";
import PixIntroPage from "./PixIntroPage";
import { motion, useAnimation, useAnimationControls, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";


const PixLandingPage = () => {
    const ref = useRef<HTMLDivElement>(null);
    const opacityAnimator = useAnimation();
    const controls1 = useAnimationControls();
    const controls2 = useAnimationControls();    

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yintroCrd = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0, -100]);

    useEffect(() => {
        const animateOpacity = scrollYProgress.on("change", (latest) => {
            if (latest > 0.7) {
                opacityAnimator.start({
                    opacity: 0
                });
            } else {
                opacityAnimator.start({
                    opacity: 1
                });
            }
        });

        return () => animateOpacity();
    }, [scrollYProgress]);
    
    useEffect(() => {
    const runLoop = async () => {
      while (true) {

        await controls1.start({
          x: 1440,
          transition: {
            duration: 16,
            ease: "linear",
          },
        });

        await controls1.set({ x: -300 }); // reset to left off-screen
      }
    };

    runLoop();
    }, [controls1]);

    useEffect(() => {
        const runLoop = async () => {
          while (true) {
    
            await controls2.start({
              x: 1440,
              transition: {
                duration: 20,
                ease: "linear",
              },
            });
    
            await controls2.set({ x: -300 }); // reset to left off-screen
        }
    };

    runLoop();
    }, [controls2]);
    
  return (
    <div ref={ref} className="h-[280vh]">
        <div className="h-[100vh] sticky top-0 p-8 overflow-x-clip">
            <motion.img className="absolute h-12 z-10 translate-y-12" src={cloud1}
            initial={{
                x: -400
            }}
            animate={controls2}
            />
            <motion.img className="absolute h-8 z-10 translate-y-26 translate-x-12" src={cloud1}
            initial={{
                x: -400
            }}
            animate={controls2}
            />
            <motion.img className="absolute h-12 z-10 bottom-0 -translate-y-[25vh]" src={cloud1}
            initial={{
                x: -300
            }}
            animate={controls2}
            />
            <motion.img className="absolute h-8 z-10" src={cloud1}
            initial={{
                x: 600
            }}
            animate={controls1}
            />
            <motion.img className="absolute h-18 z-10 translate-y-[40vh]" src={cloud2}
            initial={{
                x: 600
            }}
            animate={controls1}
            />
            <motion.img className="absolute h-12 z-10 bottom-0 -translate-y-[10vh]" src={cloud1}
            initial={{
                x: 1100
            }}
            animate={controls1}
            />
            <motion.img className="absolute h-6 z-10 bottom-0 -translate-y-[5vh] translate-x-[8vw]" src={cloud1}
            initial={{
                x: 1100
            }}
            animate={controls1}
            />
            <div className="absolute inset-0 h-[100vh] w-full bg-[linear-gradient(to_right,#eff5ff60_1.5px,transparent_1.5px),linear-gradient(to_bottom,#eff5ff60_1.5px,transparent_1.5px)] bg-[size:36px_36px]">
                <div className="relative h-full w-full bg-gradient-to-t from-custBlue-200">
                    <motion.div className="relative flex flex-col z-10 h-full w-full items-center justify-center space-y-8"
                    initial={{
                        opacity: 1
                    }}
                    animate={opacityAnimator}
                    transition={{
                        duration: 0.2
                    }}
                    >
                        <div className="flex">
                            <p className="font-pixelify text-[20vh] font-bold text-custWhite-100 uppercase">Noha Haneen</p>
                            <p className="font-pixelify text-[20vh] font-bold absolute -translate-y-2 uppercase bg-gradient-to-b from-custPurple-400 via-custPurple-400 to-custPink-200 text-transparent bg-clip-text inline-block">Noha Haneen</p>
                        </div>
                        <p className="font-pixelify text-4xl uppercase">Web Developer & Designer</p>
                        <div className="bg-custWhite-100 px-4 font-pixelify py-1 border-2 border-custPurple-400 rounded-2xl text-md uppercase"> Contact Me </div>
                    </motion.div>
                </div>
            </div>
        </div>
        <div className="absolute z-30 w-full flex flex-col items-center justify-between">
            <div className="h-[80vh] flex items-center">
                <PixPortraitCard/>
            </div>
            <motion.div
            style={{
                y: yintroCrd
            }}>
                <PixIntroPage/>
            </motion.div>
        </div>
    </div>
  )
}

export default PixLandingPage