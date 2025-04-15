import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useReducer, useRef } from "react"
import { useScrollCustom } from "../components/NavScrollContext";

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollCustom();

  useEffect(() => {
      registerSection("contact", containerRef);
  }, []);

  const { scrollYProgress : entryScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const { scrollYProgress : bgScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(entryScrollYProgress, [0, 0.4, 1], [0.1, 28, 56]);
  const opacity = useTransform(bgScrollYProgress, [0, 0.7, 0.8, 1], [0, 1, 0, 0]);
  const y = useTransform(entryScrollYProgress, [0, 1], [-200, 0]);

  
  return (
    <div className="">
      <motion.div className="z-30 h-[90vh] overflow-x-clip p-24 w-full bg-concreteCustom-100 flex justify-between"
    ref={containerRef}>
        <motion.div className="h-[80vh] w-2/3 flex flex-col items-start justify-end"
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: 1,
          delay: 1.5
        }}>
          <form action="https://formsubmit.co/el/wucole"
          method="POST"
          className="p-12 h-fit w-2/3 space-y-4 opacity-80">
            <input type="hidden" name="_captcha" value="false" />
            <div className="p-2 flex items-start space-x-8 justify-between">
              <label>Name</label>
              <input type="text"
              name="name"
              required 
              className="w-full p-2 -translate-y-2 border-2 border-indigoCustom-100 rounded-xl flex"/>            
            </div>
            <div className="p-2 flex items-start space-x-8 justify-between">
              <label>Email</label>
              <input type="email"
              name="email"
              required 
              className="w-full p-2 -translate-y-2 border-2 border-indigoCustom-100 rounded-xl flex"/>
            </div>
            <div className="p-2 flex items-start space-x-8 justify-between">
              <label>Message</label>
              <textarea name="message"
              required
              rows={4} 
              className="w-full p-2 -translate-y-2 border-2 border-indigoCustom-100 rounded-xl flex"/>
            </div>
          </form>
          <div className="p-12 flex space-x-12">
            <p className="opacity-60">Looking for someone to bring your ideas to life? Interested in my work and have questions for me? Let's Talk!</p>
            <div className="flex-col space-y-2">
              <p>Send me a message, or reach out to me directly at</p>
              <p className="text-2xl opacity-30">nohahaneenprofessional@gmail.com</p>
              <p> and I will get back to you.</p>
            </div>
          </div>
        </motion.div>
        <motion.div className="flex flex-col items-end font-customTitle2 justify-center">
          <div className="text-[20vh] text-end w-fit">
            <div className="overflow-clip">
              <motion.p
              initial={{
                y: 80
              }}
              whileInView={{
                y: 0
              }}
              transition={{
                duration: 1,
                delay: 0.2
              }}>Let's</motion.p>
            </div>
            <div className="overflow-clip">
              <motion.p
              initial={{
                y: 60
              }}
              whileInView={{
                y: 0
              }}
              transition={{
                duration: 1.5
              }}>Connect</motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactPage