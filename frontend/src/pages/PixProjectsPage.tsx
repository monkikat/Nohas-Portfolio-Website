import { useRef } from "react";
import proj4Img from "../assets/1.3.png";
import proj3Img from "../assets/2.3.gif";
import proj1Img from "../assets/teaLP.png";
import proj2Img from "../assets/3.1.gif";
import arrowDown from "../assets/icons/arrowDown.svg";
import { motion, useScroll, useTransform } from "motion/react";

// Project data - makes it super easy to add/remove projects
const projects = [
  {
    id: 1,
    title: "AI-Powered Language Learning App",
    description: "An interactive language learning platform featuring an AI chatbot for conversational practice and smart flashcards for vocabulary building. Includes Speech-to-Text (STT) for pronunciation practice and Text-to-Speech (TTS) for hearing correct pronunciations.",
    tech: "Key Technologies: Next.js, OpenAI API, STT/TTS Integration, Node.js",
    image: proj1Img,
    codeUrl: "https://github.com/monkikat/gcw-mathpix-ocr-language-chat",
    siteUrl: null,
  },
  {
    id: 2,
    title: "Interactive Event Calendar",
    description: "An interactive calendar app that allows users to select any date, discover local events happening nearby, and explore upcoming activities.",
    tech: "Key Technologies: Next.js, TypeScript, Tailwind CSS, and Framer motion.",
    image: proj2Img,
    codeUrl: "https://github.com/monkikat/event-calendar-app",
    siteUrl: null,
  },
  {
    id: 3,
    title: "Event Timer & Registration Hub",
    description: "A live timer tool that counts down to any event, allowing users to register via email for timely event updates.",
    tech: "Key Technologies: React.js, Tailwind CSS, EmailJS",
    image: proj3Img,
    codeUrl: "https://github.com/monkikat/CountdownMonki",
    siteUrl: null,
  },
  {
    id: 4,
    title: "NASA Astronomy Image Explorer",
    description: "Space Monki is a web app that interacts with NASA's Astronomy Picture of the Day (APOD) API to deliver the Astronomy Picture of the Day, a scrollable gallery of the past week, and lets users look up any APOD dating all the way back to 1995.",
    tech: "Key Technologies: React.js, Node.js, REST APIs, TypeScript",
    image: proj4Img,
    codeUrl: "https://github.com/monkikat/customize-avatar-app",
    siteUrl: "https://customize-avatar-app.vercel.app/",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Smooth scale and opacity based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="h-[100vh] sticky top-0 flex flex-col justify-center items-center p-6 md:p-12"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="h-fit rounded-3xl border-custPurple-400 border-2 w-full max-w-6xl shadow-lg shadow-custPurple-300/50 hover:shadow-xl hover:shadow-custPurple-300/70 transition-shadow duration-500"
        style={{ zIndex: 50 - index }}
      >
        <div className="h-full w-full flex flex-col space-y-6 p-6 md:p-8 rounded-3xl items-center bg-gradient-to-bl from-custPink-200 to-custBlue-200 md:flex-row md:space-x-8 md:space-y-0">
          <div className="flex w-full flex-col space-y-6 text-sm justify-between md:w-1/2 md:text-[2.2vh]">
            <div className="space-y-4 text-xs sm:text-[2.2vh]">
              <p className="font-pixelify text-xl sm:text-3xl">{project.title}</p>
              <p>{project.description}</p>
              <p>{project.tech}</p>
            </div>
            <div className="flex space-x-4 sm:space-x-8 text-xs sm:text-sm flex-wrap gap-2">
              {project.codeUrl && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.codeUrl!, "_blank")}
                  className="bg-custBlue-200 px-3 py-2 border-2 border-custPurple-300 rounded-2xl cursor-pointer hover:bg-custBlue-300 transition-all duration-300"
                >
                  View Code
                </motion.button>
              )}
              {project.siteUrl && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.siteUrl!, "_blank")}
                  className="bg-custBlue-200 px-3 py-2 border-2 border-custPurple-300 rounded-2xl cursor-pointer hover:bg-custBlue-300 transition-all duration-300"
                >
                  Visit Site
                </motion.button>
              )}
            </div>
          </div>
          <div className="m-2 w-full bg-custBlue-200 border-2 border-custPurple-300 p-2 rounded-2xl md:w-1/2 overflow-hidden">
            <img src={project.image} className="rounded-xl w-full object-cover" alt={project.title} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PixProjectsPage = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scrollYProgressBg } = useScroll({
    target: bgRef,
    offset: ["start start", "end end"]
  });

  // Smooth background color transition
  const backgroundColor = useTransform(
    scrollYProgressBg,
    [0, 0.5, 1],
    ["#d4e3fe", "#e3bffd", "#fede95"]
  );

  // Skip button visibility - only show when in projects section
  const skipButtonOpacity = useTransform(
    scrollYProgressBg,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );

  const scrollToSkills = () => {
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      skillsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      id="projects"
      ref={bgRef}
      className="mt-4 lg:mt-20"
      style={{
        backgroundColor,
        // Dynamic height based on number of projects
        minHeight: `${100 + projects.length * 100}vh`
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="h-fit flex justify-center text-[8vh] items-center w-full pb-12 md:text-[12vh] lg:text-[16vh]"
      >
        <p className="uppercase font-pixelify text-custWhite-100">Projects</p>
        <p className="uppercase font-pixelify absolute -translate-y-2">Projects</p>
      </motion.div>

      {/* Render all project cards */}
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}

      {/* Skip button - Fixed position, only visible in projects section */}
      <motion.div
        style={{ opacity: skipButtonOpacity }}
        className="fixed bottom-8 right-8 z-50 pointer-events-auto"
      >
        <motion.button
          whileHover={{ scale: 1.1, y: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToSkills}
          className="bg-custWhite-100 border-2 flex items-center justify-center font-bold space-x-2 px-6 py-3 rounded-2xl border-custPurple-400 text-base md:text-lg uppercase font-pixelify cursor-pointer hover:bg-custPurple-400 hover:text-custWhite-100 transition-all duration-300 shadow-lg shadow-custPurple-400/40"
        >
          <span>Skip to Skills</span>
          <img src={arrowDown} className="h-4" alt="Arrow down" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PixProjectsPage;
