//@ts-nocheck
import { Route, Routes } from "react-router-dom"
import { motion, useScroll } from "motion/react"
import { useRef } from "react"
import { ScrollProvider } from "./components/NavScrollContext"
import PixHomePage from "./pages/PixHomePage"
import PixNavbar from "./components/PixNavbar"
import PixFooter from "./components/PixFooter"
import PixProjectsPage from "./pages/PixProjectsPage"
import PixSkillsPage from "./pages/PixSkillsPage"

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef}>
      <ScrollProvider>
        <motion.div className="w-full fixed z-50">
          <PixNavbar/>
        </motion.div>
        <Routes>
          <Route index element={<PixHomePage/>} />
          <Route path='/' element={<PixHomePage/>} />
          <Route path='/projects' element={<PixProjectsPage/>} />
          <Route path='/skills' element={<PixSkillsPage/>} />
          <Route path='*' element={<PixHomePage/>} />
        </Routes>
        <PixFooter/>
      </ScrollProvider>
    </div>
  )
}

export default App