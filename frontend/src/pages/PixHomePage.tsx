import PixContactPage from "./PixContactPage"
import PixLandingPage from "./PixLandingPage"
import PixProjectsPage from "./PixProjectsPage"
import PixSkillsPage from "./PixSkillsPage"

const PixHomePage = () => {
  return (
    <div className="overflow-clip">
        <PixLandingPage/>
        <PixProjectsPage/>
        <PixSkillsPage/>
        <PixContactPage/>
    </div>
  )
}

export default PixHomePage