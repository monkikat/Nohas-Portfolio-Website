import PixPortraitCard from "../components/PixPortraitCard"
import PixContactPage from "./PixContactPage"
import PixIntroPage from "./PixIntroPage"
import PixLandingPage from "./PixLandingPage"
import PixProjectsPage from "./PixProjectsPage"
import PixSkillsPage from "./PixSkillsPage"
import PixSkillsPage2 from "./PixSkillsPage2"
import SkillsPage from "./SkillsPage"

const PixHomePage = () => {
  return (
    <div>
        <PixLandingPage/>
        <PixProjectsPage/>
        <PixSkillsPage2/>
        <PixContactPage/>
    </div>
  )
}

export default PixHomePage