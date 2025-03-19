import IntroContent from "../components/IntroContent"
import LandingContent from "../components/LandingContent"
import ProjectComponent from "../components/ProjectComponent"

const LandingPage = () => {

    return (
      <div className="w-full">
          <LandingContent/>
          <IntroContent/>
          <ProjectComponent/>
      </div>
    )
  }
  
  export default LandingPage