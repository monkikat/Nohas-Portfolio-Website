import ProPicCard from "../components/ProPicCard"
import IntroPage from "./IntroPage"

const LandingPage = () => {
  return (
    <div className="flex flex-col h-[450vh] w-full">
      <div className="h-[100vh] sticky top-0 w-full py-[18vh] text-[18vh] flex flex-col items-center justify-between">
        <div className="text-sm text-center space-y-1">
          <p className="">Noha Haneen</p>
          <p className="opacity-60">Contact Me</p>
        </div>
        <div className="text-[15vh] font-titleCustomFont text-center">
          <p>Web Developer &</p>
          <p>UI Designer</p>
        </div>
      </div>
      <ProPicCard/>
      <IntroPage/>
    </div>
  )
}

export default LandingPage