const NavBar = () => {
    return (
      <header className="fixed flex w-full p-2 md:p-4 text-xs md:text-sm">
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
              <div className="flex list-none space-x-2 justify-end space-y-2">
                  <li>
                      <p>Home</p>
                  </li>
                  <li>
                      <p>|</p>
                  </li>
                  <li>
                      <p>About</p>
                  </li>
                  <li>
                      <p>|</p>
                  </li>
                  <li>
                      <p>Projects</p>
                  </li>
                  <li>
                      <p>|</p>
                  </li>
                  <li>
                      <p>Skills</p>
                  </li>
                  <li>
                      <p>|</p>
                  </li>
                  <li>
                      <p>Contact</p>
                  </li>
              </div>
              <div className="flex justify-end">
                  <p>Theme</p>
              </div>
          </div>
          
      </header>
    )
  }
  
  export default NavBar