import profilePic from "../assets/profilePic.jpg";

const IntroContent = () => {
    return (
      <div className="flex flex-col mt-24 md:mt-36 mx-24 md:mx-36 space-y-12 md:space-y-24 items-center">
          <img src={profilePic} alt="Hi!" 
          className="h-36 md:h-56 w-36 md:w-56 rounded-full"/>
          <p className="text-3xl md:text-4xl text-center">Hi, I’m Noha, a Freelance Web Developer and Designer based in Houston, TX. I create visually appealing and responsive websites, and enjoy bringing fun and creative ideas to life. </p>
          <div className="flex flex-col w-full items-end text-xs md:text-sm">
            <p>My Technical Skills</p>
            <p>Projects</p>
            <p>Contact Me</p>
          </div>
      </div>
    )
  }
  
  export default IntroContent