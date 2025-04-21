const PixNavbar = () => {
    
  return (
    <header className="flex w-full p-4 text-sm font-pixelify text-custPurple-400">
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
            <p className="hover:cursor-pointer">Home</p>
            <p  className="hover:cursor-pointer">About</p>
            <p  className="hover:cursor-pointer">Projects</p>
            <p  className="hover:cursor-pointer">My Skills</p>
            <p  className="hover:cursor-pointer">Contact Me</p>
        </div>
    </header>
  )
}

export default PixNavbar