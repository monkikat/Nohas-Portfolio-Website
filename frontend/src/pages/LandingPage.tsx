import IntroContent from "../components/IntroContent"
import LandingContent from "../components/LandingContent"
import ProjectComponent from "../components/ProjectComponent"
import floatingCat from '../assets/floatingCatStill1.png'

const LandingPage = () => {
    return (
      <div className="h-fit w-full p-2 md:p-4 pt-36 md:pt-36">
          <LandingContent/>
          <img src={floatingCat} alt='meow' 
          className="fixed hidden animate-moveDiagonally px-36"/>
          <IntroContent/>
          <ProjectComponent/>
      </div>
    )
  }
  
  export default LandingPage