import { useScrollCustom } from "../components/NavScrollContext";

const TestNavbar = () => {
  const { scrollToSection } = useScrollCustom();

    return (
        <header className='flex w-full text-sm p-4'> 
          <div className='flex flex-col space-y-2 absolute'>
            <div>
              <p>Noha Haneen</p>
              <p>Web Developer & Designer</p>
            </div>
            <div>
              <p>Based In</p>
              <p>Houston, TX</p>
            </div>
          </div>
          <div className='w-full flex justify-center space-x-12'>
            <p className="hover:cursor-pointer" 
            onClick={() => scrollToSection("home")}>Home</p>
            <p  className="hover:cursor-pointer" 
            onClick={() => scrollToSection("about")}>About</p>
            <p  className="hover:cursor-pointer" 
            onClick={() => scrollToSection("projects")}>Projects</p>
            <p  className="hover:cursor-pointer" 
            onClick={() => scrollToSection("skills")}>My Skills</p>
            <p  className="hover:cursor-pointer" 
            onClick={() => scrollToSection("contact")}>Contact Me</p>
          </div>
        </header>
      )
}

export default TestNavbar