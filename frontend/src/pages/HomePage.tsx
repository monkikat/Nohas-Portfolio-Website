import { useEffect, useRef } from "react"
import { useScrollCustom } from "../components/NavScrollContext"
import ContactPage from "./ContactPage"
import LandingPage from "./LandingPage"
import ProjectsPage from "./ProjectsPage"
import SkillsPage from "./SkillsPage"

const HomePage = () => {
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollCustom();

  useEffect(() => {
      registerSection("home", homeSectionRef);
  }, []);
    
  return (
    <div ref={homeSectionRef} className="w-full">
        <LandingPage/>
        <ProjectsPage/>
        <SkillsPage/>
        <ContactPage/>
    </div>
  )
}

export default HomePage