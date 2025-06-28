import GithubIcon from "../assets/icons/githubIcon.svg";
import LinkedInIcon from "../assets/icons/linkedinIcon.svg";
import GmailIcon from "../assets/icons/gmailIcon.svg";
import { motion } from "motion/react";
import { useState } from "react";

const PixContactPage = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    
    // Show success message
    setMessageSent(true);
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    
    // Submit form data to FormSubmit.co using fetch
    fetch("https://formsubmit.co/nohahaneenprofessional@gmail.com", {
      method: "POST",
      body: formData,
    });
    
    // Clear form fields
    e.currentTarget.reset();
    
    // Hide the message after 4 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 4000);
  };

  return (
    <div id="contact" className="h-fit w-full px-8 py-10 mb-12 flex flex-col-reverse space-x-0 items-center justify-end bg-gradient-to-b from-custPink-200 lg:flex lg:flex-row lg:space-x-8">
        <motion.div className="w-1/2 flex items-center justify-center"
        initial={{
            opacity: 0,
            x: -100
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        transition={{
            duration: 1,
            delay: 0.2
        }}>
            <div className="h-fit w-3/4 bg-custBlue-200 border-2 border-custPurple-400 px-8 py-16 rounded-2xl shadow-md shadow-custPurple-400 text-xs md:text-[2.2vh]">
                <form 
                    action="https://formsubmit.co/nohahaneenprofessional@gmail.com"
                    method="POST"
                    className="space-y-2 font-pixelify"
                    onSubmit={handleSubmit}>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={window.location.href} />
                    <div className="">
                        <label>Name</label>
                        <input type="text"
                        name="name"
                        required 
                        className="border-2 w-3/4 border-custPurple-300 rounded-xl ml-4 px-4 py-1"/>            
                    </div>
                    <div className="">
                        <label>Email</label>
                        <input type="email"
                        name="email"
                        required 
                        className="border-2 w-3/4 border-custPurple-300 rounded-xl ml-4 px-4 py-1"/>
                    </div>
                    <div className="">
                        <label>Message</label>
                        <textarea name="message"
                        required
                        rows={4} 
                        className="border-2 w-3/4 border-custPurple-300 rounded-xl ml-4 px-4 py-1"/>
                        </div>
                    <div className="flex w-full items-center justify-center pt-10">
                        <button type="submit"
                        className="hover:cursor-pointer w-full py-2.5 bg-custBlue-200 border-2 border-custPurple-400 rounded-2xl">Send Message</button>
                    </div>
                    {messageSent && (
                        <div className="mt-4 py-2 px-4 bg-custPurple-400 text-custWhite-100 rounded-xl text-center animate-pulse">
                            Message sent successfully!
                        </div>
                    )}
                </form>
            </div>
        </motion.div>
        <div className="w-full h-[20vh] flex flex-col items-center justify-end py-12 lg:h-[60vh] lg:w-1/2 mt-24 mb-12 lg:mt-0 lg:mb-0 lg:items-start">
            <div className="text-6xl w-full h-fit flex items-end text-center font-pixelify text-custWhite-100 font-extrabold uppercase my-12 translate-y-0 lg:text-8xl lg:w-1/2 lg:-translate-y-16 lg:translate-x-20 lg:justify-start lg:my-0">
                <p className="absolute">Let's Connect</p>
                <p className="absolute -translate-y-2 bg-gradient-to-b from-custPurple-400 via-custPurple-400 to-custPink-200 text-transparent bg-clip-text inline-block">Let's Connect</p>
            </div>
            <div className="absolute px-2 right-60 flex space-x-12 text-custWhite-100 translate-y-4 scale-85 lg:scale-100 lg:space-x-8">
                <a href="https://www.linkedin.com/in/noha-haneen/"
                target="_blank" 
                className="bg-custBlue-200 border-2 border-custPurple-400 rounded-full h-fit p-2">
                    <img src={LinkedInIcon} className="h-4"/>
                </a>
                <a href="https://github.com/monkikat" 
                target="_blank"
                className="bg-custBlue-200 border-2 border-custPurple-400 rounded-full h-fit p-2">
                    <img src={GithubIcon} className="h-4"/>
                </a>
                <div className="bg-custBlue-200 border-2 border-custPurple-400 rounded-full h-fit p-2">
                    <img src={GmailIcon} className="h-4"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PixContactPage
