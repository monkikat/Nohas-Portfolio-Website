import linkedinIcon from "../assets/icons/linkedinIcon.svg";
import gmailIcon from "../assets/icons/gmailIcon.svg";
import githubIcon from "../assets/icons/githubIcon.svg";

const Footer = () => {
  return (
    <footer className="h-[60vh] p-8 pt-[20vh] flex justify-between bg-indigoCustom-100">
        <div className="w-1/5 flex flex-col justify-end space-y-4">
            <div>
                <p>Designed & Developed by me :D</p>
            </div>
            <p className="text-sm">This website is created using React framework. Designs and animations are created primarily using Tailwind CSS & Framer Motion.</p>
        </div>
        <div className="flex flex-col text-end justify-between space-y-8">
            <div className="flex justify-between space-x-12">
                <div className="text-sm flex flex-col space-y-4">
                    <p>Home</p>
                    <p>About Me</p>
                    <p>Recent Projects</p>
                    <p>Skills</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="text-sm">
                        <p>Email</p>
                        <p>nohahaneenprofessional@gmail.com</p>
                    </div>
                    <div className="flex w-full justify-between items-center p-2">
                        <img src={linkedinIcon} className="h-5"/>
                        <img src={githubIcon} className="h-6"/>
                        <img src={gmailIcon} className="h-5"/>
                    </div>
                </div>
            </div>
            <div className="text-4xl font-customTitle2 space-x-2 flex items-end">
                <p>Noha Haneen</p>
                <p className="opacity-70">Web Developer</p>
                <p className="opacity-70">& Designer</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer