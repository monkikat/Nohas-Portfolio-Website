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

const skills = [
  { icon: ReactJSIcon, name: "React.js" },
  { icon: NodeJSIcon, name: "Node.js" },
  { icon: ExpressIcon, name: "Express.js" },
  { icon: MongoDBIcon, name: "MongoDB" },
  { icon: AWSIcon, name: "AWS" },
  { icon: CSSIcon, name: "TailwindCSS" },
  { icon: JSIcon, name: "JavaScript" },
  { icon: PhotoshopIcon, name: "Photoshop" },
  { icon: FigmaIcon, name: "Figma" },
  { icon: BlenderIcon, name: "Blender" },
  { icon: TSIcon, name: "TypeScript" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const PixSkillsPage = () => {
  return (
    <div id="skills" className="h-fit w-full overflow-clip">
      <div className='h-fit w-full flex flex-col justify-between space-x-0 items-center p-0 bg-gradient-to-b from-custYellow-200 via-custSalmon-200 to-custPink-200 lg:flex-row lg:space-x-2'>
        <div className="h-fit w-full min-w-0 flex p-0">
          <div className="h-fit text-custWhite-100 p-8 md:p-16 overflow-y-hidden space-y-8 font-normal text-xs md:font-bold md:text-[2.2vh]">
            <motion.div
              className="space-y-8"
              {...fadeInUp}
            >
              <p className="text-2xl font-pixelify md:text-5xl">So what do I do?</p>
              <p>
                I'm a full stack developer with a creative edge, which means I can design, build, and launch digital experiences that not only work well but look and feel great too.
              </p>
            </motion.div>

            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
              <div className="flex flex-col min-w-0 flex-1 space-y-8">
                <motion.p
                  className="text-2xl font-pixelify md:text-5xl"
                  {...fadeInUp}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  Frontend Development
                </motion.p>
                <motion.p
                  {...fadeInUp}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  I build clean, interactive UIs using React, TypeScript, Tailwind CSS, and more. 
                  Whether it's a full landing page or a dynamic component, I focus on performance, accessibility, and thoughtful design. 
                  You'll get something that looks sharp and runs smoothly — no clunky layouts or weird mobile behavior.
                </motion.p>
                <motion.p
                  {...fadeInUp}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  I enjoy creating custom animations using Framer Motion, GSAP and Tailwind CSS to add depth and flow to the user experience. 
                  From subtle transitions to interactive components, I focus on motion that feels smooth.
                </motion.p>
              </div>

              <div className="flex flex-col min-w-0 flex-1 justify-between space-y-8">
                <div className="flex flex-col space-y-8">
                  <motion.p
                    className="text-2xl font-pixelify md:text-5xl"
                    {...fadeInUp}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Backend Development
                  </motion.p>
                  <motion.p
                    {...fadeInUp}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Beyond the visuals, I make sure your site can do things — store data, connect with external services, and handle user interactions securely. 
                    I build custom backend solutions, whether that means setting up dynamic routes, processing form inputs, or linking everything together with clean, well-structured APIs. 
                    If your site needs to capture user info, sync with a database, or support future scaling — I'll make it happen, reliably and efficiently.
                  </motion.p>
                </div>
                <motion.div
                  {...fadeInUp}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-custWhite-100 text-custPurple-400 uppercase px-4 py-2 border-2 border-custPurple-300 rounded-2xl text-md font-pixelify w-fit text-xs md:text-[2.2vh] cursor-pointer hover:bg-custBlue-100 transition-colors duration-300"
                >
                  <p>Visit GitHub</p> 
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-fit flex justify-center px-8 mt-12 mb-8 lg:mt-0 lg:mb-0">
          <motion.div
            className="flex flex-col items-center h-fit w-fit space-y-8 bg-gradient-to-bl px-8 py-8 border-0 rounded-xl shadow-none shadow-custPurple-400 lg:space-y-8 lg:px-8 md:shadow-sm md:from-custPink-200 md:border-2 md:border-custPurple-400"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-pixelify uppercase text-2xl font-extrabold lg:text-3xl">Skills</p>
            <div className="text-xs flex flex-col space-y-4 bg-custBlue-200 border-2 py-8 px-4 border-custPurple-400 rounded-2xl lg:space-y-8 lg:px-8">
              <div className="flex flex-col space-y-4 lg:space-y-6">
                {/* Group skills in rows of 5 */}
                <div className="flex flex-wrap gap-6 justify-center">
                  {skills.slice(0, 5).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2 flex flex-col items-center min-w-[60px]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      <img src={skill.icon} className="h-6 lg:h-10" alt={skill.name} />
                      <p className="text-center text-[10px] md:text-xs">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 justify-center">
                  {skills.slice(5, 10).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2 flex flex-col items-center min-w-[60px]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: (index + 5) * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      <img src={skill.icon} className="h-6 lg:h-10" alt={skill.name} />
                      <p className="text-center text-[10px] md:text-xs">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center">
                  {skills.slice(10).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2 flex flex-col items-center min-w-[60px]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: (index + 10) * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      <img src={skill.icon} className="h-6 lg:h-10" alt={skill.name} />
                      <p className="text-center text-[10px] md:text-xs">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PixSkillsPage;
