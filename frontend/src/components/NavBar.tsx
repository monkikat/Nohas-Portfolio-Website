import { Link } from "react-router-dom"

const NavBar = () => {
    return (
      <header className="fixed flex w-full p-2 md:p-4 text-xs md:text-sm z-30">
          <div className="flex-row md:flex basis-3/7 justify-between space-y-2 md:space-x-4">
              <div>
                  <p>Noha Haneen</p>
                  <p>Web Developer and Designer</p>
              </div>
              <div className="flex">
              </div>
              <div>
                  <p>Based in</p>
                  <p>Houston, TX, United States</p>
              </div>
          </div>
          <div className="flex basis-1/7">
          </div>
          <div className="md:flex basis-3/7 justify-between">
              <div className="flex list-none space-x-4 justify-end items-center">
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <p>|</p>
                  </li>
                  <li>
                      <Link to='/projects'>Projects</Link>
                  </li>
                  <li>
                      <p>|</p>
                  </li>
                  <li>
                      <Link to='/'>Skills</Link>
                  </li>
                  <li>
                      <p>|</p>
                  </li>
                  <li>
                      <Link to='/'>Contact Me</Link>
                  </li>
              </div>
              <div className="flex items-start">
                  <button className="border-2 border-brownCustom-100 bg-pinkCustom-50 p-1.5 rounded-2xl hover:bg-lemoncustom-50">
                    Theme
                  </button>
              </div>
          </div>
          
      </header>
    )
  }
  
  export default NavBar