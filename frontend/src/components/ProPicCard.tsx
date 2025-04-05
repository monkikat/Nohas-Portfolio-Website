import proPic from "../assets/profilePic.jpg";

const ProPicCard = () => {
  return (
    <div className="z-40 h-[100vh] pb-[45vh] w-full">
        <div className="h-full w-full flex justify-center items-end">
            <img src={proPic}
            className="h-96 object-cover rounded-full"/>
        </div>
    </div>
  )
}

export default ProPicCard