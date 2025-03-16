import sleepingCat from '../assets/floatingCatStill1.png';

const Footer = () => {
  return (
    <footer className="flex h-fit p-2 justify-between md:p-4">
        <img src={sleepingCat} alt="zzz"
        className='h-32'/>
        <div className='flex items-start justify-end text-xs space-x-12 md:text-sm'>
            <div className='flex-col space-y-6 md:space-y-12'>
                <div>
                    <p>GitHub</p>
                    <p>LinkedIn</p>
                    <p>Request Resume</p>
                </div>
                <div>
                    <p>Designed by Noha Haneen</p>
                    <p>Developed by Noha Haneen</p>
                </div>
            </div>
            <div className='flex-col space-y-6 md:space-y-12'>
                <div>
                    <p>About</p>
                    <p>My Skills</p>
                    <p>Request Services</p>
                </div>
                <p>Send Cat Away</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer