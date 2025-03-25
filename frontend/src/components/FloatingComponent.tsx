import floatingCat from '../assets/FloatingCat.svg'

const FloatingComponent = () => {

    return (
        <div>
            <img src={floatingCat} alt='meow' 
            className="h-48 md:h-60"/>
        </div>
    )
}

export default FloatingComponent