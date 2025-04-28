const PixNavbar = () => {
    
  return (
    <header className="flex flex-col w-full p-4 text-xs font-pixelify text-custPurple-400 md:text-sm justify-between">
        <div className='flex flex-col space-y-2 absolute right-4 top-10 text-end sm:text-start sm:top-4 sm:left-4'>
            <div>
              <p>Noha Haneen</p>
              <p>Web Developer & Designer</p>
            </div>
            <div>
              <p>Based In</p>
              <p>Houston, TX</p>
            </div>
        </div>
        <div className='w-full flex justify-end space-x-4 md:space-x-12 md:justify-end'>
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