import IntroContent from "../components/IntroContent"
import LandingContent from "../components/LandingContent"

const LandingPage = () => {
    return (
      <div className="h-fit w-full p-2 md:p-4 pt-36 md:pt-48">
          <LandingContent/>
          <p className=" mx-12 md:mx-24 text-xs md:text-sm">Learn More</p>
          <IntroContent/>
      </div>
    )
  }
  
  export default LandingPage