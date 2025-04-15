import { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "motion/react";

const projtext1 = "A space exploration website filled with images from the cosmos. View the Astronomy Picture of the Day & Week, alongside a vast collection of images from NASA's database dating back to June 16, 1995. Integrated with NASA's APOD API, updates daily in real time.";
const projTitle1 = "Space Monki";
const techs1 = "React - Node.js - MongoDB - API Integration";

const projtext2 = "Demo Timer Web application integrated with a live timer counting down to the launch of an event or a product, with custom animations created using Tailwind CSS. Users can register via email to receive timely updates on the upcoming event.";
const projTitle2 = "Event Timer App";
const techs2 = "React - TailwindCSS - Custom SVG - TypeScript";

const projtext3 = "A space exploration website featuring breathtaking images of the cosmos. View NASA’s Astronomy Picture of the Day in real time, along with a vast collection of space images dating back to June 16, 1995.";
const projTitle3 = "2D Assets & Animations";
const techs3 = "React Node.js MongoDB TypeScript";

const ProjectTexts = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset:["start start", "end start"]
    });

    const { scrollYProgress: scrollYProgressBG } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const proj1Animator = useAnimation();
    const proj2Animator = useAnimation();
    const proj3Animator = useAnimation();

    const scale = useTransform(scrollYProgressBG, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
    const y = useTransform(scrollYProgressBG, [0, 0.1, 0.9, 1], [-100, 0, 0, -50]);

    useEffect(() => {
        const animateProj1 = scrollYProgress.on("change", (latest) => {
            if (latest > 0.28) {
                proj1Animator.start({
                    opacity: 0,
                    transition: {
                        duration: 0.2
                    }
                });
            }
            else {
                proj1Animator.start({
                    opacity: 1
                })
            }
        });

        const animateProj2 = scrollYProgress.on("change", (latest) => {
            if ((latest > 0.30) && (latest < 0.62)) {
                proj2Animator.start({
                    opacity: 1,
                    transition: {
                        duration: 0.2
                    }
                });
            }
            else {
                proj2Animator.start({
                    opacity: 0
                })
            }
        });

        const animateProj3 = scrollYProgress.on("change", (latest) => {
            if (latest > 0.64) {
                proj3Animator.start({
                    opacity: 1,
                    transition: {
                        duration: 0.2
                    }
                });
            }
            else {
                proj3Animator.start({
                    opacity: 0
                })
            }
        });

        return () => {
            animateProj1();
            animateProj2();
            animateProj3();
        }
    }, [scrollYProgress]);

  return (
    <motion.div ref={containerRef} className="relative h-[500vh] p-12 w-full flex flex-col bg-gradient-to-b to-indigoCustom-100"
    >
        <motion.div className=" h-[80vh] w-5/9 sticky top-18 flex flex-col items-center justify-center"
        initial={{
            opacity: 1
        }}
        animate={proj1Animator}>
            <div className="h-[60vh] w-4/5 flex space-x-22">
                <div className="flex flex-col space-y-12">
                    <div className="flex flex-col space-y-4">
                        <p className="text-6xl uppercase">{projTitle1}</p>
                        <p className="text-sm">{projtext1}</p>
                    </div>
                    <div className="flex justify-start items-center text-xs space-x-8">
                        <button className="py-1 px-2 rounded-lg border-1 border-indigoCustom-400">View Code</button>
                        <p className="py-1 px-2 rounded-lg border-1 border-indigoCustom-400">Visit Site</p>
                    </div>
                </div>
            </div>
        </motion.div>
        <motion.div className="h-[80vh] w-5/9 sticky top-18 flex flex-col items-center justify-center"
        initial={{
            opacity: 0
        }}
        animate={proj2Animator}>
            <div className="h-[60vh] flex space-x-12 w-4/5">
                <div className="flex flex-col space-y-12">
                    <div className="flex flex-col space-y-4">
                        <p className="text-6xl uppercase">{projTitle2}</p>
                        <p className="text-sm">{projtext2}</p>
                    </div>
                    <div className="flex justify-start items-center text-xs space-x-8">
                        <button className="py-1 px-2 rounded-lg border-1 border-indigoCustom-400">View Code</button>
                    </div>
                </div>
            </div>
        </motion.div>
        <motion.div className="h-[80vh] w-5/9 sticky top-18 flex flex-col items-center justify-center"
        initial={{
            opacity: 0
        }}
        style={{
            scale,
            y
        }}
        animate={proj3Animator}>
            <div className="h-[60vh] flex space-x-12 w-4/5">
                <div className="flex flex-col space-y-12">
                    <div className="flex flex-col space-y-4">
                        <p className="text-6xl uppercase">{projTitle3}</p>
                        <p className="text-sm">{projtext3}</p>
                    </div>
                    <div className="flex justify-start items-center text-xs space-x-8">
                        <button className="py-1 px-2 rounded-lg border-1 border-indigoCustom-400">View on Github</button>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default ProjectTexts