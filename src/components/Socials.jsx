import '../App.css'
import pintrestLogo from '../assets/Path(1).svg'
import instagramLogo from '../assets/Shape.svg'
import facebookLogo from '../assets/Path.svg'

const Socials = () => {
  return (
    <div className='socials'>
            <img className='logo'
              src={facebookLogo}>
            </img>
            <img className='logo'
              src={pintrestLogo}>
            </img>
            <img className='logo'
              src={instagramLogo}>
            </img>
          </div>
  )
}

export default Socials