import { motion } from "motion/react";

const PixNavbar = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <header className="flex flex-col w-full p-4 text-xs font-pixelify text-custPurple-400 lg:text-sm justify-between">
            <motion.div 
                className='flex flex-col space-y-2 absolute right-4 top-10 text-end sm:text-start sm:top-4 sm:left-4'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p>Noha Haneen</p>
                    <p>Web Developer & Designer</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p>Based In</p>
                    <p>Houston, TX</p>
                </motion.div>
            </motion.div>
            <motion.div 
                className='w-full flex justify-end space-x-4 md:space-x-12 md:justify-end'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                {['Home', 'About', 'Projects', 'My Skills', 'Contact Me'].map((label, index) => {
                    const actions: { [key: string]: () => void } = {
                        'Home': scrollToTop,
                        'About': () => scrollToSection('intro'),
                        'Projects': () => scrollToSection('projects'),
                        'My Skills': () => scrollToSection('skills'),
                        'Contact Me': () => scrollToSection('contact')
                    };
                    
                    return (
                        <motion.p
                            key={label}
                            className="hover:cursor-pointer transition-colors relative group"
                            onClick={actions[label]}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 0.1 + index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ scale: 1.05, color: "#9dabe7" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {label}
                            <motion.span
                                className="absolute -bottom-1 left-0 h-0.5 bg-custPurple-300"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.p>
                    );
                })}
            </motion.div>
        </header>
    );
};

export default PixNavbar;
