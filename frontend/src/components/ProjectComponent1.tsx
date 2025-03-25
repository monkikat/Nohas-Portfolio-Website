import projPic1 from '../assets/SpaceM1.png';
import proj2 from '../assets/EventMGif.gif';
import ProjectCard from './ProjectCard';
import proj1 from "../assets/todayAPOD.png"
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ProjectCardtype } from '../types/ProjectCardType';

const Projects : ProjectCardtype[] = [
    {
        imgSrc: proj1,
        title: "SpaceMonki",
        descr: "A space exploration website with beautiful images straight from NASA's database, in real time.",
        techs: "React  TS  Node.js",
        gitLink: "https://github.com/monkikat/SpaceMonki/blob/main/client/src/pages/LandingPage.tsx",
        liveLink: "https://spacemonki.netlify.app",
    },
    {
        imgSrc: proj2,
        title: "An Event Countdown Application",
        descr: "An event registration web application with a dynamic countdown timer, and email registration features for interested users.",
        techs: "React  TS  Node.js",
        gitLink: "https://github.com/monkikat/SpaceMonki/blob/main/client/src/pages/LandingPage.tsx",
        liveLink: "https://spacemonki.netlify.app",
    },
    {
        imgSrc: proj1,
        title: "SpaceMonki",
        descr: "A space exploration website with beautiful images straight from NASA's database, in real time.",
        techs: "React  TS  Node.js",
        gitLink: "https://github.com/monkikat/SpaceMonki/blob/main/client/src/pages/LandingPage.tsx",
        liveLink: "https://spacemonki.netlify.app",
    }
]

//React.js, Node.js, MongoDB, Rest APIs
//A space exploration website with beautiful images straight from NASA's database, in real time.

//An event registration web application with a dynamic countdown timer, and email registration features for interested users.
//React.js, Tailwind CSS, TypeScript

const ProjectComponent1 = () => {

    const parentRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: scrollYProgressScale } = useScroll({
        target: parentRef,
        offset: ["start end", "end start"]
    });

    const transitionOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [-100, 0])
    const projectIndex = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);
    const scale = useTransform(scrollYProgressScale, [0, 0.1, 0.8, 0.99, 1], [0.5, 1, 1, 0.8, 1]);

  return (
    <div className='relative h-[600vh] w-full justify-between'
    ref={parentRef}>
        <motion.div className='sticky h-[100vh] w-full top-0'
        style={{
            scale
        }}>
            {Projects.map((project, index) => (
          <motion.div
            key={index}
            style={{
              opacity: useTransform(projectIndex, [index - 0.4, index, index + 0.6], [0, 1, 0])
            }}
            
            className="absolute"
          >
            <ProjectCard imgSrc={project.imgSrc} title={project.title} descr={project.descr} techs={project.techs} gitLink={project.gitLink} liveLink={project.liveLink}/>
          </motion.div>
        ))}   
        </motion.div>     
    </div>
  )
}

export default ProjectComponent1
