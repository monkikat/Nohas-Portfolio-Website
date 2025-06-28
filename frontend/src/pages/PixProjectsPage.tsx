import { useEffect, useRef } from "react";
import proj1Img from "../assets/1.3.png";
import proj3Img from "../assets/2.3.gif";
import proj4Img from "../assets/CustAvatarGif.gif";
import proj2Img from "../assets/3.1.gif";
import arrowDown from "../assets/icons/arrowDown.svg";
import { motion, useAnimation, useScroll, useTransform } from "motion/react";
const proj1Title = "NASA Astronomy Image Explorer";
const proj1text1 = "Space Monki is a web app that interacts with NASA's Astronomy Picture of the Day (APOD) API to deliver the Astronomy Picture of the Day, a scrollable gallery of the past week, and lets users look up any APOD dating all the way back to 1995."
const proj1text2 = "Key Technologies: React.js, Node.js, REST APIs, TypeScript"

const proj3Title = "Event Timer & Registration Hub";
const proj3text1 = "A live timer tool that counts down to any event, allowing users to register via email for timely event updates."
const proj3text2 = "Key Technologies: React.js, Tailwind CSS, EmailJS"

const proj4Title = "Avatar Customizer";
const proj4text1 = "A stop motion themed web game that lets users customize an avatar by choosing different clothing from a dynamic asset menu. The app updates the avatar in real-time as users make their selections.";
const proj4text2 = "This project is built with React.js, TypeScript, Tailwind CSS, and Framer Motion.";

const proj2Title = "Interactive Event Calendar";
const proj2text1 = "An interactive calendar app that allows users to select any date, discover local events happening nearby, and explore upcoming activities.";
const proj2text2 = "Key Technologies: Next.js, TypeScript, Tailwind CSS, and Framer motion.";

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

    const backgroundColor = useTransform( scrollYProgressBg, [0, 0.65, 1], ["#d4e3fe", "#d4e3fe", "#fede95"]);

    useEffect(() => {
        const animateProj1 = scrollYProgressBg.on("change", (latest) => {
            if (latest > 0.4) {
                proj1Animator.start({
                    opacity: 0,
                    y: 0,
                    pointerEvents: "none"
                })
            }
            else {
                proj1Animator.start({
                    opacity: 1,
                    y: 0,
                    pointerEvents: "auto"
                })
            }
        });

        const animateProj2 = scrollYProgressBg.on("change", (latest) => {
            if ((latest > 0.39) && (latest < 0.6)) {
                proj2Animator.start({
                    opacity: 1,
                    y: 0,
                    pointerEvents: "auto"
                })
            }
            else {
                proj2Animator.start({
                    opacity: 0,
                    y: 0,
                    pointerEvents: "none"
                })
            }
        });

        const animateProj3 = scrollYProgressBg.on("change", (latest) => {
            if ((latest > 0.59) && (latest < 0.81)) {
                proj3Animator.start({
                    opacity: 1,
                    y: 0,
                    pointerEvents: "auto"
                })
            }
            else {
                proj3Animator.start({
                    opacity: 0,
                    y: 0,
                    pointerEvents: "none"
                })
            }
        });

        const animateProj4 = scrollYProgressBg.on("change", (latest) => {
            if (latest > 0.8) {
                proj4Animator.start({
                    opacity: 1,
                    y: 0,
                    pointerEvents: "auto"
                })
            }
            else {
                proj4Animator.start({
                    opacity: 0,
                    y: 0,
                    pointerEvents: "none"
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
    <motion.div ref={bgRef} className="h-[500vh] mt-4 lg:mt-20"
    style={{
        backgroundColor
    }}>
        <motion.div className="h-fit flex justify-center text-[8vh] items-center w-full pb-12 md:text-[12vh] lg:text-[16vh]">
            <p className="uppercase font-pixelify text-custWhite-100">Projects</p>
            <p className="uppercase font-pixelify absolute -translate-y-2">Projects</p>
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
                <div className="h-full w-full flex flex-col space-y-6 p-8 rounded-3xl items-center bg-gradient-to-bl from-custPink-200 to-custBlue-200 md:flex md:flex-row md:space-x-8">
                    <div className="flex w-full flex-col space-y-6 text-sm justify-between md:w-1/2 md:text-[2.2vh]">
                        <div className="space-y-4 text-xs sm:text-[2.2vh]">
                            <p className="font-pixelify text-xl sm:text-3xl">{proj1Title}</p>
                            <p>{proj1text1}</p>
                            <p>{proj1text2}</p>
                        </div>
                        <div className="flex space-x-8 text-xs sm:text-sm">
                            <button 
                            onClick={() => window.open("https://github.com/monkikat/SpaceMonki", "_blank")}
                            className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl cursor-pointer hover:bg-custBlue-300 transition-colors"> 
                                View Code 
                            </button>
                            <button 
                            onClick={() => window.open("https://spacemonki.netlify.app", "_blank")}
                            className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl cursor-pointer hover:bg-custBlue-300 transition-colors"> 
                                Visit Site 
                            </button>
                        </div>
                    </div>
                    <div className="m-2 w-full bg-custBlue-200 border-2 border-custPurple-300 p-2 rounded-2xl md:w-1/2">
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

        <div className="z-30 h-[100vh] sticky top-0 flex flex-col justify-center items-center p-12">
            <motion.div className="h-fit rounded-3xl border-custPurple-400 border-2 w-5/6 shadow-md shadow-custPurple-300"
            initial={{
                y: 0,
                opacity: 1
            }}
            animate={proj2Animator}
            transition={{
                duration: 0.2
            }}>
                <div className="h-full w-full flex flex-col space-y-6 p-8 rounded-3xl items-center bg-gradient-to-bl from-custPink-200 to-custBlue-200 md:flex md:flex-row md:space-x-8">
                    <div className="flex w-full flex-col space-y-6 text-sm justify-between md:w-1/2 md:text-[2.2vh]">
                        <div className="space-y-4 text-xs sm:text-[2.2vh]">
                            <p className="font-pixelify text-xl sm:text-3xl">{proj2Title}</p>
                            <p>{proj2text1}</p>
                            <p>{proj2text2}</p>
                        </div>
                        <div className="flex space-x-8 text-xs sm:text-sm">
                            <button 
                            onClick={() => window.open("https://github.com/monkikat/event-calendar-app", "_blank")}
                            className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl cursor-pointer hover:bg-custBlue-300 transition-colors"> 
                                View Code 
                            </button>
                        </div>
                    </div>
                    <div className="m-2 w-full bg-custBlue-200 border-2 border-custPurple-300 p-2 rounded-2xl md:w-1/2">
                        <img src={proj2Img} className="rounded-xl w-full"/>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="z-20 h-[100vh] sticky top-0 flex flex-col justify-center items-center p-12">
            <motion.div className="h-fit rounded-3xl border-custPurple-400 border-2 w-5/6 shadow-md shadow-custPurple-300"
            initial={{
                y: 0,
                opacity: 1
            }}
            animate={proj3Animator}
            transition={{
                duration: 0.2
            }}>
                <div className="h-full w-full flex flex-col space-y-6 p-8 rounded-3xl items-center bg-gradient-to-bl from-custPink-200 to-custBlue-200 md:flex md:flex-row md:space-x-8">
                    <div className="flex w-full flex-col space-y-6 text-sm justify-between md:w-1/2 md:text-[2.2vh]">
                        <div className="space-y-4 text-xs sm:text-[2.2vh]">
                            <p className="font-pixelify text-xl sm:text-3xl">{proj3Title}</p>
                            <p>{proj3text1}</p>
                            <p>{proj3text2}</p>
                        </div>
                        <div className="flex space-x-8 text-xs sm:text-sm">
                            <button 
                            onClick={() => window.open("https://github.com/monkikat/CountdownMonki", "_blank")}
                            className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl cursor-pointer hover:bg-custBlue-300 transition-colors"> 
                                View Code 
                            </button>
                        </div>
                    </div>
                    <div className="m-2 w-full bg-custBlue-200 border-2 border-custPurple-300 p-2 rounded-2xl md:w-1/2">
                        <img src={proj3Img} className="rounded-xl w-full"/>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="z-10 h-[100vh] sticky top-0 flex flex-col justify-center items-center p-12">
            <motion.div className="h-fit rounded-3xl border-custPurple-400 border-2 w-5/6 shadow-md shadow-custPurple-300"
            initial={{
                y: 0,
                opacity: 1
            }}
            animate={proj4Animator}
            transition={{
                duration: 0.2
            }}>
                <div className="h-full w-full flex flex-col space-y-6 p-8 rounded-3xl items-center bg-gradient-to-bl from-custPink-200 to-custBlue-200 md:flex md:flex-row md:space-x-8">
                    <div className="flex w-full flex-col space-y-6 text-sm justify-between md:w-1/2 md:text-[2.2vh]">
                        <div className="space-y-4 text-xs sm:text-[2.2vh]">
                            <p className="font-pixelify text-xl sm:text-3xl">{proj4Title}</p>
                            <p>{proj4text1}</p>
                            <p>{proj4text2}</p>
                        </div>
                        <div className="flex space-x-8 text-xs sm:text-sm">
                            <button 
                            onClick={() => window.open("https://github.com/monkikat/customize-avatar-app", "_blank")}
                            className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl cursor-pointer hover:bg-custBlue-300 transition-colors"> 
                                View Code 
                            </button>
                            <button 
                            onClick={() => window.open("https://customize-avatar-app.vercel.app/", "_blank")}
                            className="bg-custBlue-200 px-2 py-1 border-2 border-custPurple-300 rounded-4xl cursor-pointer hover:bg-custBlue-300 transition-colors"> 
                                Visit Site 
                            </button>
                        </div>
                    </div>
                    <div className="m-2 w-full bg-custBlue-200 border-2 border-custPurple-300 p-2 rounded-2xl md:w-1/2">
                        <img src={proj4Img} className="rounded-xl w-full"/>
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default PixProjectsPage
