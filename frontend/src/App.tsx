import { Route, Routes } from "react-router-dom"
import ProjectsPage from "./pages/ProjectsPage"
import HomePage from "./pages/HomePage"
import TestNavbar from "./components/TestNavbar"
import { motion, useAnimation, useScroll, useTransform } from "motion/react"
import { useEffect, useRef } from "react"
import SkillsPage from "./pages/SkillsPage"
import Footer from "./components/Footer"
import { ScrollProvider } from "./components/NavScrollContext"
import PixHomePage from "./pages/PixHomePage"
import PixNavbar from "./components/PixNavbar"
import PixFooter from "./components/PixFooter"
/*
function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animator = useAnimation();

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const navTextColor = useTransform(scrollYProgress, [0, 0.3, 0.32, 1], ["#f3f3f3", "#f3f3f3", "#6d4884", "#6d4884"]);
  const navTextOpacity = useTransform(scrollYProgress, [0, 0.16, 0.18, 0.97, 0.98, 1], [0, 0, 1, 1, 0, 0]);

  return (
    <div ref={containerRef}>
      <ScrollProvider>
        <motion.div className="w-full fixed z-50"
        style={{
          color: navTextColor,
          opacity: navTextOpacity
        }}>
          <TestNavbar/>
        </motion.div>
        <Routes>
          <Route index element = {<HomePage/>} />
          <Route path='/' element = {<HomePage/>} />
          <Route path='/projects' element = {<ProjectsPage/>} />
          <Route path='/skills' element = {<SkillsPage/>} />
        </Routes>
        <Footer/>
      </ScrollProvider>
    </div>
  )
}

export default App
*/

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animator = useAnimation();

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const navTextColor = useTransform(scrollYProgress, [0, 0.7, 0.74, 1], ["#7589ce", "#7589ce", "#fffeff", "#fffeff"]);
  const navTextOpacity = useTransform(scrollYProgress, [0, 0.16, 0.18, 0.97, 0.98, 1], [0, 0, 1, 1, 0, 0]);

  return (
    <div ref={containerRef}>
      <ScrollProvider>
        <motion.div className="w-full fixed z-50">
          <PixNavbar/>
        </motion.div>
        <Routes>
          <Route index element = {<PixHomePage/>} />
          <Route path='/' element = {<PixHomePage/>} />
        </Routes>
        <PixFooter/>
      </ScrollProvider>
    </div>
  )
}

export default App