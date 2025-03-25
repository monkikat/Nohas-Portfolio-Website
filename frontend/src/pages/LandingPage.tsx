import IntroComponent from "../components/IntroComponent"
import LandingComponent from "../components/LandingComponent"
import TechnologiesComponenet from "../components/TechnologiesComponenet.tsx"
import ProjectsPage from "./ProjectsPage.tsx"


const LandingPage = () => {

    return (
      <div className="w-full">
          <LandingComponent/>
          <IntroComponent/>
          <ProjectsPage/>
          <TechnologiesComponenet/>
      </div>
    )
  }
  
  export default LandingPage