import GithubIcon from "../assets/icons/githubIcon.svg";
import LinkedInIcon from "../assets/icons/linkedinIcon.svg";
import GmailIcon from "../assets/icons/gmailIcon.svg";

const PixContactPage = () => {
  return (
    <div className="h-[90vh] w-full p-8 flex space-x-8 items-center justify-end bg-gradient-to-b from-custPink-200">
        <div className="h-1/2 w-1/2 flex items-center justify-center">
            <div className="h-fit w-fit bg-custBlue-200 border-2 border-custPurple-400 px-8 py-16 rounded-2xl shadow-md shadow-custPurple-400">
                <form action="https://formsubmit.co/nohahaneenprofessional@gmail.com"
            method="POST"
            className="space-y-2 font-pixelify">
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="">
                        <label>Name</label>
                        <input type="text"
                        name="name"
                        required 
                        className="border-2 border-custPurple-300 rounded-xl ml-4 px-4 py-1"/>            
                    </div>
                    <div className="">
                        <label>Email</label>
                        <input type="email"
                        name="email"
                        required 
                        className="border-2 border-custPurple-300 rounded-xl ml-4 px-4 py-1"/>
                    </div>
                    <div className="">
                        <label>Message</label>
                        <textarea name="message"
                        required
                        rows={4} 
                        className="border-2 border-custPurple-300 rounded-xl ml-4 px-4 py-1"/>
                        </div>
                    <div className="flex w-full items-center justify-center pt-10">
                        <button type="submit"
                        className="hover:cursor-pointer w-full py-2.5 bg-custBlue-200 border-2 border-custPurple-400 rounded-2xl">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center space-y-8">
            <div className="text-9xl w-1/2 h-fit flex items-center font-pixelify text-custWhite-100 font-extrabold">
                <p>Let's Connect</p>
                <p className="absolute -translate-y-2 bg-gradient-to-b from-custPurple-400 via-custPurple-400 to-custPink-200 text-transparent bg-clip-text inline-block">Let's Connect</p>
            </div>
            <div className="px-2 flex w-1/3 justify-between text-custWhite-100">
                <div className="bg-custBlue-200 border-2 border-custPurple-400 rounded-full p-2">
                    <img src={LinkedInIcon} className="h-4"/>
                </div>
                <div className="bg-custBlue-200 border-2 border-custPurple-400 rounded-full p-2">
                    <img src={GithubIcon} className="h-4"/>
                </div>
                <div className="bg-custBlue-200 border-2 border-custPurple-400 rounded-full p-2">
                    <img src={GmailIcon} className="h-4"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PixContactPage