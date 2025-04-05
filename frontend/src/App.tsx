import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ProjectsPage from "./pages/ProjectsPage"
import Footer from "./components/Footer"
import Testyyy from "./components/ProjectSection"
import TestLandingPage from "./pages/LandingPage"
import TestNavbar from "./components/TestNavbar"
import HomePage from "./pages/HomePage"

/*

<div className="">
      <NavBar/>
      <Routes>
        <Route index element = {<LandingPage/>} />
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/projects' element = {<ProjectsPage/>} />
      </Routes>
      <Footer/>
    </div>

*/

function App() {

  return (
    <div>
      <Routes>
        <Route index element = {<HomePage/>} />
        <Route path='/' element = {<HomePage/>} />
        <Route path='/projects' element = {<ProjectsPage/>} />
      </Routes>
    </div>
  )
}

export default App
