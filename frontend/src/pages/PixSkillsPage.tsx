import CSSIcon from "../assets/icons/cssIcon.svg";
import TSIcon from "../assets/icons/typescriptIcon.svg";
import JSIcon from "../assets/icons/javascriptIcon.svg";
import MongoDBIcon from "../assets/icons/mongodbIcon.svg";
import BlenderIcon from "../assets/icons/blenderIcon.svg";
import AWSIcon from "../assets/icons/awsIcon.svg";
import FigmaIcon from "../assets/icons/figmaIcon.svg";
import PhotoshopIcon from "../assets/icons/photoshopIcon.svg";
import ReactJSIcon from "../assets/icons/reactIcon.svg";
import NodeJSIcon from "../assets/icons/nodejsIcon.svg";
import ExpressIcon from "../assets/icons/expressIcon.svg";
import { motion } from "motion/react";

const PixSkillsPage = () => {

  return (
    <div className="h-fit w-[100vw] overflow-clip">
        <div className='h-fit w-[100vw] flex flex-col justify-between space-x-8 items-center p-8 bg-gradient-to-b from-custYellow-200 via-custSalmon-200 to-custPink-200 lg:flex-row'>
            <div className="h-fit min-w-0 flex p-8">
                <div className="h-fit text-custWhite-100 p-16 overflow-y-hidden space-y-8 font-bold text-xs md:text-[2.2vh]">
                    <motion.div className="space-y-8"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2
                    }}>
                        <p className="text-3xl font-pixelify md:text-5xl">So what do I do?</p>
                        <p>I’m a full stack developer with a creative edge, which means I can design, build, and launch digital experiences that not only work well but look and feel great too.</p>
                    </motion.div>
                    <div className="flex space-x-8">
                        <div className="flex flex-col min-w-0 flex-1/2 space-y-8">
                            <motion.p className="text-3xl font-pixelify md:text-5xl"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2
                            }}>Frontend Development</motion.p>
                            <motion.p
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2
                            }}>I build clean, interactive UIs using React, TypeScript, Tailwind CSS, and more. 
                                Whether it’s a full landing page or a dynamic component, I focus on performance, accessibility, and thoughtful design. 
                                You’ll get something that looks sharp and runs smoothly — no clunky layouts or weird mobile behavior.</motion.p>
                            <motion.p
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2
                            }}>I enjoy creating custom animations using Framer Motion, GSAP and Tailwind CSS to add depth and flow to the user experience. 
                            From subtle transitions to interactive components, I focus on motion that feels smooth.</motion.p>

                        </div>
                        <div className="flex flex-col min-w-0 flex-1/2 justify-between">
                            <div className="flex flex-col space-y-8">
                                <motion.p className="text-3xl font-pixelify md:text-5xl"
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2
                                }}>Backend Development</motion.p>
                                <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2
                                }}>Beyond the visuals, I make sure your site can do things — store data, connect with external services, and handle user interactions securely. 
                                    I build custom backend solutions, whether that means setting up dynamic routes, processing form inputs, or linking everything together with clean, well-structured APIs. 
                                    If your site needs to capture user info, sync with a database, or support future scaling — I’ll make it happen, reliably and efficiently.</motion.p>
                            </div>
                            <motion.div className="bg-custWhite-100 text-custPurple-400 uppercase px-4 py-2 border-2 border-custPurple-300 rounded-2xl text-md font-pixelify w-fit"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6
                            }}>
                                <p>Visit GitHub</p> 
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-fit flex justify-center px-8">
                <motion.div className="flex flex-col items-center h-fit w-fit space-y-8 bg-gradient-to-bl from-custPink-200 border-2 p-8 border-custPurple-400 rounded-xl shadow-sm shadow-custPurple-400"
                initial={{
                    opacity: 0,
                    x: 100
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 1,
                    delay: 0.2
                }}>
                    <p className="font-pixelify uppercase text-2xl font-extrabold lg:text-3xl">Skills</p>
                    <div className="text-xs flex flex-col space-y-8 bg-custBlue-200 border-2 p-4 border-custPurple-400 rounded-2xl">
                        <div className="flex flex-col space-y-8 space-x-4 lg:flex-row lg:space-y-0">
                            <div className="flex flex-row space-y-0 space-x-8 items-center justify-between lg:flex lg:flex-col lg:space-y-8 lg:space-x-0">
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={ReactJSIcon} className="h-5 lg:h-8"/>
                                    <p>React.js</p>
                                </div>
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={NodeJSIcon} className="h-5 lg:h-8"/>
                                    <p>Node.js</p>
                                </div>
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={ExpressIcon} className="h-5 lg:h-8"/>
                                    <p>Express.js</p>
                                </div>
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={MongoDBIcon} className="h-5 lg:h-8"/>
                                    <p>MongoDB</p>
                                </div>
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={AWSIcon} className="h-5 lg:h-8"/>
                                    <p>AWS</p>
                                </div>
                            </div>
                            <div className="flex flex-row space-y-0 space-x-8 items-center lg:flex lg:flex-col lg:space-y-8 lg:space-x-0">
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={CSSIcon} className="h-5 lg:h-8"/>
                                    <p>TailwindCSS</p>
                                </div>
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={JSIcon} className="h-5 lg:h-8"/>
                                    <p>JavaScript</p>
                                </div>
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={PhotoshopIcon} className="h-5 lg:h-8"/>
                                    <p>Photoshop</p>
                                </div>
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={FigmaIcon} className="h-5 lg:h-8"/>
                                    <p>Figma</p>
                                </div>
                                <div className="space-y-2 flex flex-col items-center">
                                    <img src={BlenderIcon} className="h-5 lg:h-8"/>
                                    <p>Blender</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                            <img src={TSIcon} className="h-5 lg:h-8"/>
                            <p>TypeScript</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default PixSkillsPage