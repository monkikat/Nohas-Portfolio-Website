import profilePic from "../assets/profilePic.jpg";

const IntroContent = () => {
    
    return (
      <div className="relative h-[200vh] mt-48 md:mt-56">
        <div className="sticky flex flex-col h-[100vh] top-0 mx-24 md:mx-36 py-18 space-y-4 justify-between items-center">
          <img src={profilePic} alt="Hi!" 
          className="h-48 md:h-56 w-48 md:w-56 rounded-full"/>
          <p className="text-3xl md:text-4xl text-center">Hi, I’m Noha, a Freelance Web Developer and Designer based in Houston, TX. I create visually appealing and responsive websites, and enjoy bringing fun and creative ideas to life. </p>
          <div className="flex flex-col w-full items-end text-xs md:text-sm">
            <p>My Technical Skills</p>
            <p>Projects</p>
            <p>Contact Me</p>
          </div> 
        </div>
      </div>
    )
  }
  
  export default IntroContent