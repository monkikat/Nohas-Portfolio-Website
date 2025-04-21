const PixFooter = () => {
  return (
    <div className="h-[30vh] w-full flex items-end pb-12 px-4 text-sm">
        <div className="flex flex-col justify-end w-1/5 space-y-8">
            <p>Designed & Developed by me : )</p>
            <p>This website is created using React framework. Designs and animations are created primarily using Tailwind CSS & Framer Motion.</p>
        </div>
        <div className="w-full flex flex-col items-center space-y-8">
          <p>Navigation</p>
          <div className="flex flex-col">
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>What I Do</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <p>Address</p>
          <p>Houston, TX, United States</p>
        </div>
    </div>
  )
}

export default PixFooter