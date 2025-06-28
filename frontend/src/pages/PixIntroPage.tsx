const introText1 = `Hi, I’m Noha — a freelance web developer and designer based in Houston.`
const introText2 = `I love bringing creativity to life through clean, responsive, and visually engaging websites. Creativity is what drives me, whether I’m designing a landing page, building out interactive components, or just sketching new UI ideas.`
const introText3 = `I have created and integrated REST APIs, built out full-stack features, and handled backend tasks like form handling, data storage, and sending email notifications — essentially, I like making sure the stuff behind the scenes runs just as smoothly as the front.`
const introText4 = `If I’m not coding, I’m probably designing, planning a fun side project, or figuring out a better way to do something I just did last week. Always learning, always building.`;


const PixIntroPage = () => {
  return (
    <div id="intro" className='h-[100vh] w-full flex justify-center items-center'>
        <div className='max-h-[100vh] w-5/6 flex flex-col justify-center space-y-8 bg-custBlue-200 border-2 border-custPurple-300 p-12 rounded-3xl text-sm md:w-1/2 md:text-lg'>
            <p>{introText1}</p>
            <p>{introText2}</p>
            <p>{introText3}</p>
            <p>{introText4}</p>
        </div>
    </div>
  )
}

export default PixIntroPage
