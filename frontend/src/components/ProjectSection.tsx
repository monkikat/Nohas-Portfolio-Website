import proj1 from "../assets/todayAPOD.png"
import proj2 from "../assets/EventMGif.gif"
import proj3 from "../assets/SpaceM1.png"
import { motion } from "motion/react"


const ProjectSection = () => {
  return (
    <div className="bg-amber-400 h-[500vh]">
        <div className="flex h-[100vh] w-1/2 sticky top-0">
            <div className="">
                <img src={proj1} className="h-[50vh] object-cover"/>
                <img src={proj2} className="h-[50vh] object-cover"/>
                <img src={proj3} className="h-[50vh] object-cover"/>
            </div> 
        </div>
    </div>
  )
}

export default ProjectSection