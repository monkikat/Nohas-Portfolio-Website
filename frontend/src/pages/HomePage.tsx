import TestIntroPage from "./IntroPage"
import TestLandingPage from "./LandingPage"
import ProjectsPage from "./ProjectsPage"

const HomePage = () => {
  return (
    <div className="w-full">
        <TestLandingPage/>
        <ProjectsPage/>
        <div className="h-[100vh]">

        </div>
    </div>
  )
}

export default HomePage