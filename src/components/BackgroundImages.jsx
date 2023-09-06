import mountains from '../assets/Group 5.svg'
import stars from '../assets/Combined Shape.svg'

const BackgroundImages = () => {
  return (
    <>
        <img className='background mountains'
            src={mountains}>
        </img>
        <img className='background stars'
            src={stars}>
        </img>
    </>
  )
}

export default BackgroundImages