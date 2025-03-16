import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import LandingPage from "./pages/LandingPage"
import ProjectsPage from "./pages/ProjectsPage"

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index element = {<LandingPage/>} />
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/projects' element = {<ProjectsPage/>} />
      </Routes>
    </div>
  )
}

export default App
