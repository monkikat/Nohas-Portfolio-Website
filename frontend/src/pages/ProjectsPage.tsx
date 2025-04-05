import { motion, useScroll, useTransform } from "motion/react"
import ProjectTitleCard from "../components/ProjectTitleCard"
import { useRef } from "react"

const projtext = "A space exploration website featuring breathtaking images of the cosmos. View NASA’s Astronomy Picture of the Day in real time, along with a vast collection of space images dating back to June 16, 1995.";
const projTitle = "Space Monki";
const subTitle = "Integrated with NASA's API, updates daily in real time";
const techs = "React Node.js MongoDB TypeScript";

const ProjectsPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, -200]);
    
  return (
    <div ref={containerRef} className="bg-concreteCustom-100">
        <ProjectTitleCard/>
        <div className="-translate-y-200">
            <div className="px-12">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="w-2/3">
                        <p>Glistening dewdrops clung to the petals, reflecting dawn’s first light in a silent dance of color. 
                            The air was thick with the scent of earth and rain, a promise of renewal in the cycle of life.</p>
                        <p>Shadows stretched across the empty streets as lanterns flickered against the creeping dusk. Somewhere in the distance, a clock chimed, marking the passage of another forgotten hour. 
                            The city, once alive with voices, now whispered only to the wind.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsPage