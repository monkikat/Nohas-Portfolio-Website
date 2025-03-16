import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import LandingPage from "./pages/LandingPage"
import ProjectsPage from "./pages/ProjectsPage"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="">
      <NavBar/>
      <Routes>
        <Route index element = {<LandingPage/>} />
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/projects' element = {<ProjectsPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
