import { motion } from "motion/react";
import GithubIcon from "../assets/icons/githubIcon.svg";
import LinkedInIcon from "../assets/icons/linkedinIcon.svg";
import GmailIcon from "../assets/icons/gmailIcon.svg";

const PixFooter = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", action: scrollToTop },
    { label: "About", action: () => scrollToSection('intro') },
    { label: "Projects", action: () => scrollToSection('projects') },
    { label: "Skills", action: () => scrollToSection('skills') },
    { label: "Contact", action: () => scrollToSection('contact') },
  ];

  const socialLinks = [
    { 
      icon: LinkedInIcon, 
      url: "https://www.linkedin.com/in/noha-haneen/",
      label: "LinkedIn"
    },
    { 
      icon: GithubIcon, 
      url: "https://github.com/monkikat",
      label: "GitHub"
    },
    { 
      icon: GmailIcon, 
      url: "mailto:nohahaneenprofessional@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-custSalmon-200 to-custPink-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-pixelify text-2xl font-bold text-custPurple-400">
              Noha Haneen
            </h3>
            <p className="text-sm text-custPurple-400">
              Full Stack Developer & Designer based in Houston, TX
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-custWhite-100 text-custPurple-400 px-4 py-2 rounded-xl border-2 border-custPurple-400 font-pixelify text-sm hover:bg-custPurple-400 hover:text-custWhite-100 transition-all duration-300"
            >
              Back to Top ↑
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-pixelify text-lg font-bold text-custPurple-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <button
                    onClick={link.action}
                    className="text-sm text-custPurple-400 hover:text-custPurple-300 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-pixelify text-lg font-bold text-custPurple-400">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-custPurple-400 font-semibold min-w-fit">Email:</span>
                <a
                  href="mailto:nohahaneenprofessional@gmail.com"
                  className="text-custPurple-400 hover:text-custPurple-300 transition-colors break-all"
                >
                  nohahaneenprofessional@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-custPurple-400 font-semibold">Location:</span>
                <span className="text-custPurple-400">Houston, TX</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-pixelify text-lg font-bold text-custPurple-400">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-custBlue-200 border-2 border-custPurple-400 rounded-full p-3 hover:bg-custPurple-400 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <img 
                    src={social.icon} 
                    className="h-5 w-5" 
                    alt={social.label}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t-2 border-custPurple-300 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-custPurple-400">
            <p className="text-center md:text-left">
              © {currentYear} Noha Haneen. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Designed & Developed with{" "}
              <span className="text-red-400">♥</span> using React.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default PixFooter;
