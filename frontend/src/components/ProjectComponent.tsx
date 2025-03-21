import projPic1 from '../assets/SpaceM1.png';
import proj2pic1 from '../assets/EventMGif.gif';

const ProjectComponent = () => {
  return (
    <div className="w-full h-fit flex pt-24 md:pt-24 px-24">
        <div className='grid h-fit grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:gap-24'>
            <div className='flex-col space-y-18 md:basis-1/2'>
                <div className='flex-col md:basis-1/2 space-y-4'>
                    <img src={projPic1} alt="SpaceMonki: Space Exploration Website"
                    className='w-full hover:scale-105 transition-all duration-1000'/>
                    <div className='p-2 pt-8 space-y-4'>
                        <div className='flex justify-between text-3xl space-x-6 md:space-x-6'>
                            <p className='text-2xl md:text-3xl'>React.js, TypeScript, Node.js, MongoDB, Rest APIs</p>
                            <p className='text-xs md:text-sm whitespace-nowrap'>View Code</p>
                        </div>
                        <p className='w-2/3 text-xs md:text-sm'>A space exploration website with beautiful images straight from NASA's database, in real time.</p>
                    </div>
                </div> 
                <div className='flex-col md:basis-1/2 space-y-4'>
                    <img src={proj2pic1} alt="An Event Countdown Web Application"
                    className='w-full hover:scale-105 transition-all duration-1000'/>
                    <div className='p-2 pt-8 space-y-4'>
                        <div className='flex justify-between text-3xl space-x-6 md:space-x-6'>
                            <p className='text-2xl md:text-3xl'>React.js, Tailwind CSS, TypeScript, Express.js, Node.js</p>
                            <p className='text-xs md:text-sm whitespace-nowrap'>View Code</p>
                        </div>
                        <p className='w-2/3 text-xs md:text-sm'>An event registration web application with a dynamic countdown timer, and email registration features for interested users.</p>
                    </div>
                </div>               
            </div>
            <div className='flex-col space-y-18 md:basis-1/2'>
                <div className='flex-col md:basis-1/2 space-y-4'>
                    <img src={proj2pic1} alt="An Event Countdown Web Application"
                    className='w-full hover:scale-105 transition-all duration-1000'/>
                    <div className='p-2 pt-8 space-y-4'>
                        <div className='flex justify-between text-3xl space-x-6 md:space-x-6'>
                            <p className='text-2xl md:text-3xl'>React.js, Tailwind CSS, TypeScript, Express.js, Node.js</p>
                            <p className='text-xs md:text-sm whitespace-nowrap'>View Code</p>
                        </div>
                        <p className='w-2/3 text-xs md:text-sm'>An event registration web application with a dynamic countdown timer, and email registration features for interested users.</p>
                    </div>
                </div>   
                <div className='flex-col md:basis-1/2 space-y-4'>
                    <img src={projPic1} alt="SpaceMonki: Space Exploration Website"
                    className='w-full hover:scale-105 transition-all duration-1000'/>
                    <div className='p-2 pt-8 space-y-4'>
                        <div className='flex justify-between text-3xl space-x-6 md:space-x-6'>
                            <p className='text-2xl md:text-3xl'>React.js, TypeScript, Node.js, MongoDB, Rest APIs</p>
                            <p className='text-xs md:text-sm whitespace-nowrap'>View Code</p>
                        </div>
                        <p className='w-2/3 text-xs md:text-sm'>A space exploration website with beautiful images straight from NASA's database, in real time.</p>
                    </div>
                </div>             
            </div>
        </div>
    </div>
  )
}

export default ProjectComponent