const PixFooter = () => {
  return (
    <div className="h-[30vh] w-full flex justify-between pb-12 px-12 font-pixelify text-xs lg:text-sm">
        <div className="flex flex-col space-y-8 space-x-0 justify-end h-full lg:space-x-8 lg:space-y-0 lg:flex lg:flex-row">
            <div className="flex space-x-8">
              <div className="flex space-y-4 flex-col justify-end">
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
              </div>
              <div className="flex space-y-4 flex-col justify-end">
                <p>What I Do</p>
                <p>Contact</p>
              </div>
            </div>
            <div className="flex flex-col space-x-0 items-start sm:flex sm:flex-row sm:space-x-2 sm:items-end">
              <p>Email:</p>
              <p>nohahaneenprofessional@gmail.com</p>
            </div>
        </div>
        <div className="flex flex-col justify-end w-2/5 space-y-4 lg:w-1/5">
            <p className="">Designed & Developed by me :)</p>
            <p>This website is created using React.js. Designs and animations are created primarily using Tailwind CSS & Framer Motion.</p>
        </div>
    </div>
  )
}

export default PixFooter