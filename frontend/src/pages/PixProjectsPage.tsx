import { useEffect, useRef } from "react";
import proj1Img from "../assets/1.3.png";
import proj2Img from "../assets/2.3.gif";
import proj4Img from "../assets/3.1.gif";
import arrowDown from "../assets/icons/arrowDown.svg";
import { motion, useAnimation, useScroll, useTransform } from "motion/react";
const proj1Title = "Space Monki";
const proj1text1 = "is a web app that interacts with NASA's Astronomy Picture of the Day (APOD) API to deliver the Astronomy Picture of the Day, a scrollable gallery of the past week, and lets users look up any APOD all the way back to 1995."
const proj1text2 = "This project is built with React.js, Node.js and MongoDB."

const proj2Title = "Event Timer Web App";
const proj2text1 = "Space Monki is a web app that interacts with NASA's Astronomy Picture of the Day (APOD) API to deliver the Astronomy Picture of the Day."
const proj2text2 = "This project is built with React.js, Node.js and MongoDB."

const proj3Title = "ASPIRE Private School Website";
const proj3text1 = "Space Monki is a web app that interacts with NASA's Astronomy Picture of the Day (APOD) API to deliver the Astronomy Picture of the Day, a scrollable gallery of the past week, and lets users look up any APOD all the way back to 1995."
const proj3text2 = "This project is built with React.js, Node.js and MongoDB."

const proj4Title = "Assets & Animations";
const proj4text1 = "Space Monki is a web app that interacts with NASA's Astronomy Picture of the Day (APOD) API to deliver the Astronomy Picture of the Day, a scrollable gallery of the past week, and lets users look up any APOD all the way back to 1995."
const proj4text2 = "This project is built with React.js, Node.js and MongoDB."

const PixProjectsPage = () => {
    const bgRef = useRef<HTMLDivElement>(null);
    const proj1Animator = useAnimation();
    const proj2Animator = useAnimation();
    const proj3Animator = useAnimation();
    const proj4Animator = useAnimation();

    const { scrollYProgress: scrollYProgressBg } = useScroll({
        target: bgRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress } = useScroll({
        target: bgRef,
        offset: ["start end", "end start"]
    });

    const backgroundColor = useTransform( scrollYProgressBg, [0, 0.65, 1], ["#d4e3fe", "#d4e3fe", "#fede95"]);
    const yTitle = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 100]);

    useEffect(() => {
        const animateProj1 = scrollYProgressBg.on("change", (latest) => {
            if (latest > 0.4) {
                proj1Animator.start({
                    opacity: 0,
                    y: 0
                })
            }
            else {
                proj1Animator.start({
                    opacity: 1,
                    y: 0
                })
            }
        });

        const animateProj2 = scrollYProgressBg.on("change", (latest) => {
            if ((latest > 0.39) && (latest < 0.6)) {
                proj2Animator.start({
                    opacity: 1,
                    y: 0
                })
            }
            else {
                proj2Animator.start({
                    opacity: 0,
                    y: 0
                })
            }
        });

        const animateProj3 = scrollYProgressBg.on("change", (latest) => {
            if ((latest > 0.59) && (latest < 0.81)) {
                proj3Animator.start({
                    opacity: 1,
                    y: 0
                })
            }
            else {
                proj3Animator.start({
                    opacity: 0,
                    y: 0
                })
            }
        });

        const animateProj4 = scrollYProgressBg.on("change", (latest) => {
            if (latest > 0.8) {
                proj4Animator.start({
                    opacity: 1,
                    y: 0
                })
            }
            else {
                proj4Animator.start({
                    opacity: 0,
                    y: 0
                })
            }
        });

        return () => {
            animateProj1();
            animateProj2();
            animateProj3();
            animateProj4();
        }
    }, [scrollYProgressBg]);

    
  return (
    <motion.div ref={bgRef} className="h-[500vh]"
    style={{
        backgroundColor
    }}>
        <motion.div className="h-fit flex justify-center items-center w-full pb-12"
        style={{
            y: yTitle
        }}
        >
            <p className="uppercase text-8xl font-pixelify text-custWhite-100 ">Projects</p>
            <p className="uppercase text-8xl font-pixelify absolute -translate-y-2">Projects</p>
        </motion.div>
        <div className="z-40 h-[100vh] sticky top-0 flex flex-col justify-center items-center p-12">
            <motion.div className="h-fit rounded-3xl border-custPurple-400 border-2 w-5/6 shadow-md shadow-custPurple-300"
            initial={{
                y: 0,
                opacity: 1
            }}
            animate={proj1Animator}
            transition={{
                duration: 0.2
            }}>
                <div className="h-full w-full flex p-8 space-x-8 rounded-3xl bg-gradient-to-bl from-custPink-200 to-custBlue-200">
                    <div className="flex w-1/2 flex-col justify-between">
                        <div className="space-y-8">
                            <p className="font-pixelify text-2xl">{proj1Title}</p>
                            <p>{proj1text1}</p>
                            <p>{proj1text2}</p>
                        </div>
                        <div className="flex space-x-8">
                            <div className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl text-sm"> 
                                View Code 
                            </div>
                            <div className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl text-sm"> 
                                Visit Site 
                            </div>
                        </div>
                    </div>
                    <div className="m-2 w-1/2 bg-custBlue-200 border-2 border-custPurple-300 p-2 rounded-2xl">
                        <img src={proj1Img} className="rounded-xl w-full"/>
                    </div>
                </div>
            </motion.div>
            <motion.div className="absolute bottom-0 right-0 px-12 py-12"
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                delay: 0.8
            }}>
                <div className="bg-custWhite-100 border-2 flex items-center justify-center font-bold space-x-1 h-fit w-fit px-4 py-1 rounded-2xl border-custPurple-400 text-lg uppercase font-pixelify animate-bounce">
                    <p className="">
                        Skip
                    </p>
                    <img src={arrowDown} className="h-4.5"/>
                </div>
            </motion.div>
        </div>

        <div className="h-[100vh] sticky top-0 flex flex-col justify-center items-center p-12">
            <motion.div className="h-fit rounded-3xl border-custPurple-400 border-2 w-5/6 shadow-md shadow-custPurple-300"
            initial={{
                y: 0,
                opacity: 1
            }}
            animate={proj2Animator}
            transition={{
                duration: 0.2
            }}>
                <div className="h-full w-full flex p-8 space-x-8 rounded-3xl bg-gradient-to-bl from-custPink-200 to-custBlue-200">
                    <div className="flex w-1/2 flex-col justify-between">
                        <div className="space-y-8">
                            <p className="font-pixelify text-2xl">{proj2Title}</p>
                            <p>{proj2text1}</p>
                            <p>{proj2text2}</p>
                        </div>
                        <div className="flex space-x-8">
                            <div className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl text-sm"> 
                                View Code 
                            </div>
                            <div className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl text-sm"> 
                                Visit Site 
                            </div>
                        </div>
                    </div>
                    <div className="m-2 w-1/2 flex justify-center bg-custBlue-200 border-2 border-custPurple-300 p-2 rounded-2xl">
                        <img src={proj2Img} className="rounded-xl w-full"/>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="h-[100vh] sticky top-0 flex flex-col justify-center items-center p-12">
            <motion.div className="h-fit rounded-3xl border-custPurple-400 border-2 w-5/6 shadow-md shadow-custPurple-300"
            initial={{
                y: 0,
                opacity: 1
            }}
            animate={proj3Animator}
            transition={{
                duration: 0.2
            }}>
                <div className="h-full w-full flex p-8 space-x-8 rounded-3xl bg-gradient-to-bl from-custPink-200 to-custBlue-200">
                    <div className="flex w-1/2 flex-col justify-between">
                        <div className="space-y-8">
                            <p className="font-pixelify text-2xl">{proj3Title}</p>
                            <p>{proj3text1}</p>
                            <p>{proj3text2}</p>
                        </div>
                        <div className="flex space-x-8">
                            <div className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl text-sm"> 
                                View Code 
                            </div>
                            <div className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl text-sm"> 
                                Visit Site 
                            </div>
                        </div>
                    </div>
                    <div className="m-2 w-1/2 flex justify-center bg-custBlue-200 border-2 border-custPurple-300 p-2 rounded-2xl">
                        <img src={proj1Img} className="rounded-xl w-full"/>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="h-[100vh] sticky top-0 flex flex-col justify-center items-center p-12">
            <motion.div className="h-fit rounded-3xl border-custPurple-400 border-2 w-5/6 shadow-md shadow-custPurple-300"
            initial={{
                y: 0,
                opacity: 1
            }}
            animate={proj4Animator}
            transition={{
                duration: 0.2
            }}>
                <div className="h-full w-full flex p-8 space-x-8 rounded-3xl bg-gradient-to-bl from-custPink-200 to-custBlue-200">
                    <div className="flex w-1/2 flex-col justify-between">
                        <div className="space-y-8">
                            <p className="font-pixelify text-2xl">{proj4Title}</p>
                            <p>{proj4text1}</p>
                            <p>{proj4text2}</p>
                        </div>
                        <div className="flex space-x-8">
                            <div className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl text-sm"> 
                                View Code 
                            </div>
                            <div className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl text-sm"> 
                                Visit Site 
                            </div>
                        </div>
                    </div>
                    <div className="m-2 w-1/2 flex justify-center bg-custBlue-200 border-2 border-custPurple-300 p-2 rounded-2xl">
                        <img src={proj4Img} className="rounded-xl w-full"/>
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default PixProjectsPage