import cloudImg from "../assets/clouds-cropped.svg";

const CloudComponent = () => {
  return (
    <div className="absolute bottom-0 w-full flex">
        <img src={cloudImg} className="w-full h-auto object-cover" />
    </div>
  )
}

export default CloudComponent