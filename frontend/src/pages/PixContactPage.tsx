import GithubIcon from "../assets/icons/githubIcon.svg";
import LinkedInIcon from "../assets/icons/linkedinIcon.svg";
import GmailIcon from "../assets/icons/gmailIcon.svg";
import { motion } from "motion/react";
import { useState } from "react";

const PixContactPage = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setMessageSent(true);
    
    const formData = new FormData(e.currentTarget);
    
    fetch("https://formsubmit.co/nohahaneenprofessional@gmail.com", {
      method: "POST",
      body: formData,
    });
    
    e.currentTarget.reset();
    
    setTimeout(() => {
      setMessageSent(false);
    }, 4000);
  };

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
    <div id="contact" className="min-h-screen w-full px-4 py-16 md:py-24 flex items-center justify-center bg-gradient-to-b from-custPink-200 to-custSalmon-200">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-pixelify font-extrabold uppercase text-custWhite-100">
              Let's Connect
            </h2>
            <h2 className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-pixelify font-extrabold uppercase -translate-y-2 bg-gradient-to-b from-custPurple-400 via-custPurple-400 to-custPink-200 text-transparent bg-clip-text">
              Let's Connect
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-custWhite-100 text-base md:text-xl max-w-2xl mx-auto"
          >
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="bg-custBlue-200 border-2 border-custPurple-400 rounded-3xl shadow-lg shadow-custPurple-400/30 p-6 md:p-8">
              <form
                action="https://formsubmit.co/nohahaneenprofessional@gmail.com"
                method="POST"
                className="space-y-6 font-pixelify"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm md:text-base font-semibold text-custPurple-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border-2 border-custPurple-300 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-custPurple-400 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm md:text-base font-semibold text-custPurple-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border-2 border-custPurple-300 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-custPurple-400 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm md:text-base font-semibold text-custPurple-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full border-2 border-custPurple-300 rounded-xl px-4 py-3 text-sm md:text-base resize-none focus:outline-none focus:border-custPurple-400 transition-colors duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 md:py-4 bg-custWhite-100 text-custPurple-400 border-2 border-custPurple-400 rounded-2xl font-bold text-sm md:text-base hover:bg-custPurple-400 hover:text-custWhite-100 transition-all duration-300 uppercase"
                >
                  Send Message
                </motion.button>

                {messageSent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 py-3 px-4 bg-custPurple-400 text-custWhite-100 rounded-xl text-center font-semibold"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full space-y-8"
          >
            {/* Info Card */}
            <div className="bg-custWhite-100 border-2 border-custPurple-400 rounded-3xl shadow-lg shadow-custPurple-400/30 p-6 md:p-8">
              <h3 className="font-pixelify text-2xl md:text-3xl font-bold text-custPurple-400 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4 text-sm md:text-base">
                <p className="text-custPurple-400">
                  I'm currently available for freelance work and full-time opportunities. Whether you have a question, want to discuss a project, or just want to say hi, I'd love to hear from you!
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-custBlue-200 border-2 border-custPurple-400 rounded-full p-2">
                      <img src={GmailIcon} className="h-4 w-4" alt="Email" />
                    </div>
                    <a 
                      href="mailto:nohahaneenprofessional@gmail.com"
                      className="text-custPurple-400 hover:text-custPurple-300 transition-colors"
                    >
                      nohahaneenprofessional@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-custBlue-200 border-2 border-custPurple-400 rounded-full p-2">
                      <svg className="h-4 w-4 text-custPurple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-custPurple-400">Houston, TX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-custWhite-100 border-2 border-custPurple-400 rounded-3xl shadow-lg shadow-custPurple-400/30 p-6 md:p-8">
              <h3 className="font-pixelify text-2xl md:text-3xl font-bold text-custPurple-400 mb-6">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 bg-custBlue-200 border-2 border-custPurple-400 rounded-2xl px-6 py-3 hover:bg-custPurple-400 hover:border-custPurple-400 transition-all duration-300 group"
                  >
                    <img 
                      src={social.icon} 
                      className="h-5 w-5" 
                      alt={social.label}
                    />
                    <span className="font-pixelify font-semibold text-custPurple-400 group-hover:text-custWhite-100 transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PixContactPage;
