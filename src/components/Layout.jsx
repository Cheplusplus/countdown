import '../App.css'
import TimeCardHolder from './TimeCardHolder';
import Socials from './Socials';
import background from '../assets/Rectangle.svg'
import Background from './Background';

const Layout = ({timeBetween}) => {
  return (
    <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h2 className='main-text'>WE'RE LAUNCHING SOON</h2>
        <TimeCardHolder timeBetween={timeBetween}/>
        <Socials/>
        <Background />
    </div>
  )
}

export default Layout