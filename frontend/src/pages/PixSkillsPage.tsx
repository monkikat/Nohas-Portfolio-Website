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

const PixSkillsPage = () => {
  return (
    <div className="h-[200vh]">
        <div className='h-[100vh] sticky top-0 flex justify-between space-x-8 items-center p-8'>
            <div className="h-full w-4/5 p-8">
                <div className="h-full text-custWhite-100 p-16 overflow-y-hidden space-y-8 font-bold w-full bg-gradient-to-b from-custYellow-200 via-custSalmon-200 to-custPink-200 border-2 border-custPurple-400 rounded-2xl">
                    <div className="space-y-8">
                        <p className="text-5xl font-pixelify">So what do I do?</p>
                        <p>I help bring ideas to life on the web — whether you need a full website, a specific feature, or just someone to make sense of all the moving parts. 
                            I’m a full stack developer with a creative edge, which means I can design, build, and launch digital experiences that not only work well but look and feel great too.</p>
                    </div>
                    <div className="space-y-8">
                        <p className="text-3xl font-pixelify">Frontend Development</p>
                        <p>I build clean, interactive UIs using React, TypeScript, Tailwind CSS, and more. 
                            Whether it’s a full landing page or a dynamic component, I focus on performance, accessibility, and thoughtful design. 
                            You’ll get something that looks sharp and runs smoothly — no clunky layouts or weird mobile behavior.</p>
                    </div>
                    <div className="space-y-8">
                        <p className="text-3xl font-pixelify">Backend Development</p>
                        <p>Beyond the visuals, I make sure your site can actually do things — store data, connect with external services, and handle user interactions securely. 
                            I build custom backend solutions using Node.js, Express, and MongoDB, whether that means setting up dynamic routes, processing form inputs, or linking everything together with clean, well-structured APIs. 
                            If your site needs to capture user info, sync with a database, or support future scaling — I’ll make it happen, reliably and efficiently.</p>
                    </div>
                </div>
            </div>

            <div className="w-1/5 flex justify-center">
                <div className="flex flex-col items-center h-fit w-fit space-y-8 bg-gradient-to-bl from-custPink-200 border-2 p-8 border-custPurple-400 rounded-xl shadow-md shadow-custPurple-400">
                    <p className="font-pixelify uppercase text-3xl font-extrabold">My Skills</p>
                    <div className="text-xs flex space-x-4 bg-custBlue-200 border-2 p-4 border-custPurple-400 rounded-2xl">
                        <div className="flex flex-col space-y-8 items-center">
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={ReactJSIcon} className="h-8"/>
                                <p>React.js</p>
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={NodeJSIcon} className="h-8"/>
                                <p>Node.js</p>
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={ExpressIcon} className="h-8"/>
                                <p>Express.js</p>
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={MongoDBIcon} className="h-8"/>
                                <p>MongoDB</p>
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={AWSIcon} className="h-8"/>
                                <p>AWS</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-8 items-center">
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={CSSIcon} className="h-8"/>
                                <p>TailwindCSS</p>
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={JSIcon} className="h-8"/>
                                <p>JavaScript</p>
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={TSIcon} className="h-8"/>
                                <p>TypeScript</p>
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={FigmaIcon} className="h-8"/>
                                <p>Figma</p>
                            </div>
                            <div className="space-y-2 flex flex-col items-center">
                                <img src={BlenderIcon} className="h-8"/>
                                <p>Blender</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PixSkillsPage