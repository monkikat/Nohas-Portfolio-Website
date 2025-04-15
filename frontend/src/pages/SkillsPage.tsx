import { useEffect, useRef } from "react";
import ServicesComponent from "../components/ServicesComponent"
import TechsComponent from "../components/TechsComponent"
import { useScrollCustom } from "../components/NavScrollContext";

const SkillsPage = () => {
    const skillsSectionRef = useRef<HTMLDivElement>(null);
    const { registerSection } = useScrollCustom();
  
    useEffect(() => {
        registerSection("skills", skillsSectionRef);
    }, []);

  return (
    <div ref={skillsSectionRef} className="bg-indigoCustom-100 pb-[30vh]">
        <ServicesComponent/>
        <TechsComponent/>
    </div>
  )
}

export default SkillsPage