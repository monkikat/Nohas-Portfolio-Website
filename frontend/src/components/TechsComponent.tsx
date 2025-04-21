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
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const titleText1 = "Tools I";
const titleText2 = "Build With";

const TechsComponent = () => {
    const title1Words = titleText1.split(" ");
    const title2Words = titleText2.split(" ");
        
        const titleRef = useRef<HTMLDivElement>(null);
    
        const { scrollYProgress } = useScroll({
            target: titleRef,
            offset: ["start end", "end end"]
        });
    
        const { scrollYProgress : scrollYProgressBG } = useScroll({
            target: titleRef,
            offset: ["start end", "end end"]
        });
    
        const entryY = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8, 1], [60, 60, 20, 0, -20]);
        const entryScale = useTransform(scrollYProgress, [0, 0.6, 1], [0.9, 1.1, 1]);
        const text1y = useTransform(scrollYProgress, [0, 0.8, 1], [100, -10, -10]);
        const text2y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 100, -10, -10]);
        
  return (
    <div className="h-[80vh] w-full flex flex-col space-y-24 items-center bg-indigoCustom-100"
    ref={titleRef}>
        <motion.div className="h-2/5 text-9xl text-center flex flex-col items-center w-full justify-center">
            <div className="overflow-clip h-[15vh]">
                <motion.p className="uppercase font-customTitle2"
                style={{
                    y: text1y
                }}>{titleText1}</motion.p>
            </div>
            <div className="overflow-clip h-[15vh]">
                <motion.p className="uppercase font-customTitle2"
                style={{
                    y: text2y
                }}>{titleText2}</motion.p>
            </div>
        </motion.div>
        <div className="z-40 h-3/5 w-4/5 p-12 flex flex-row space-y-12 items-center font-semibold">
            <motion.div className="flex flex-1/5 flex-col p-2 space-y-4 items-center"
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 0.3,
                delay: 0.6
            }}>
                <img src={CSSIcon} className="h-10"/>
                <p className="opacity-60 text-sm text-nowrap">Tailwind CSS4</p>
            </motion.div>
            <div className="flex flex-1/5 flex-col space-y-12 items-center">
                <motion.div className="flex flex-1/3 flex-col p-2 space-y-4"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.3
                }}>
                    <img src={ReactJSIcon} className="h-12"/>
                    <p className="opacity-60 text-sm">React.js</p>
                </motion.div>
                <motion.div className="flex flex-1/3 flex-col p-2 space-y-4"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.6
                }}>
                    <img src={JSIcon} className="h-10"/>
                    <p className="opacity-60 text-sm">JavaScript</p>
                </motion.div>
                <motion.div className="flex flex-1/3 flex-col p-2 space-y-4"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.9
                }}>
                    <img src={FigmaIcon} className="h-12"/>
                    <p className="opacity-60 text-sm">Figma</p>
                </motion.div>
            </div>
            <div className="flex flex-1/5  flex-col space-y-12 items-center pt-12">
                <motion.div className="flex flex-1/3 flex-col p-2 space-y-4 justify-end"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.3
                }}>
                    <img src={NodeJSIcon} className="h-12"/>
                    <p className="opacity-60 text-sm">Node.js</p>
                </motion.div>
                <motion.div className="flex flex-1/3 flex-col p-2 space-y-4"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.6
                }}>
                    <img src={TSIcon} className="h-10"/>
                    <p className="opacity-60 text-sm">TypeScript</p>
                </motion.div>
                <motion.div className="flex flex-1/3 flex-col p-2 space-y-4"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.9
                }}>
                    <img src={BlenderIcon} className="h-12"/>
                    <p className="opacity-60 text-sm">Blender</p>
                </motion.div>
            </div>
            <div className="flex flex-1/5  flex-col space-y-12 items-center">
                <motion.div className="flex flex-1/3 flex-col p-2 space-y-4"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.3
                }}>
                    <img src={ExpressIcon} className="h-10"/>
                    <p className="opacity-60 text-sm">Express.js</p>
                </motion.div>
                <motion.div className="flex flex-1/5 flex-col p-2 space-y-4"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.6
                }}>
                    <img src={MongoDBIcon} className="h-10"/>
                    <p className="opacity-60 text-sm">MongoDB</p>
                </motion.div>
                <motion.div className="flex flex-1/3 flex-col p-2 space-y-4"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.9
                }}>
                    <img src={PhotoshopIcon} className="h-10"/>
                    <p className="opacity-60 text-sm">Photoshop</p>
                </motion.div>
            </div>
            <motion.div className="flex flex-1/5 flex-col p-2 space-y-2 items-center -translate-y-5"
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 0.3,
                delay: 0.6
            }}>
                <img src={AWSIcon} className="h-10"/>
                <p className="opacity-60 text-sm">AWS</p>
            </motion.div>       
        </div>
    </div>
  )
}

export default TechsComponent