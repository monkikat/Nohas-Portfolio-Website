import IntroContent from "../components/IntroContent"
import LandingContent from "../components/LandingContent"
import ProjectComponent from "../components/ProjectComponent"
import floatingCat from '../assets/floatingCatStill1.png'

const LandingPage = () => {
    return (
      <div className="h-fit w-full p-2 md:p-4 pt-36 md:pt-48">
          <LandingContent/>
          <p className=" mx-12 md:mx-24 text-xs md:text-sm">Learn More</p>
          <img src={floatingCat} alt='meow' 
          className="fixed px-36 animate-moveDiagonally"/>
          <IntroContent/>
          <ProjectComponent/>
      </div>
    )
  }
  
  export default LandingPage