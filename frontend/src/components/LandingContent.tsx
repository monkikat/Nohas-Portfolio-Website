const LandingContent = () => {

    return (
      <div className="flex-row md:flex items-end space-x-12 space-y-2 mx-12 md:mx-12">
        <div className="flex md:basis-2/3 flex-col space-y-2">
          <div className="text-7xl md:text-9xl">
            <h1>Noha</h1>
            <h1>Haneen</h1>
          </div>
          <p className="text-3xl md:text-4xl">Web Developer and Designer</p>
        </div>
        <div className="flex md:basis-1/3 justify-start md:justify-between text-xs md:text-sm space-x-4 py-6">
          <a href="https://github.com/monkikat" target="_blank">GitHub</a>
          <p>|</p>
          <a href="https://www.linkedin.com/in/noha-haneen/" target="_blank">LinkedIn</a>
          <p>|</p>
          <p>Gmail</p>
        </div>
      </div>
    )
  }
  
  export default LandingContent