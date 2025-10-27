import { motion } from "motion/react";

const introText1 = `Hi, I'm Noha — a freelance web developer and designer based in Houston.`;
const introText2 = `I love bringing creativity to life through clean, responsive, and visually engaging websites. Creativity is what drives me, whether I'm designing a landing page, building out interactive components, or just sketching new UI ideas.`;
const introText3 = `I have created and integrated REST APIs, built out full-stack features, and handled backend tasks like form handling, data storage, and sending email notifications — essentially, I like making sure the stuff behind the scenes runs just as smoothly as the front.`;
const introText4 = `If I'm not coding, I'm probably designing, planning a fun side project, or figuring out a better way to do something I just did last week. Always learning, always building.`;

const PixIntroPage = () => {
    return (
        <div id="intro" className='h-[100vh] w-full flex justify-center items-center'>
            <motion.div 
                className='max-h-[100vh] w-5/6 flex flex-col justify-center space-y-8 bg-custBlue-200 border-2 border-custPurple-300 p-8 md:p-12 rounded-3xl text-sm md:w-1/2 md:text-lg'
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.6, 
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    {introText1}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.6, 
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    {introText2}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.6, 
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    {introText3}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.6, 
                        delay: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    {introText4}
                </motion.p>
            </motion.div>
        </div>
    );
};

export default PixIntroPage;
