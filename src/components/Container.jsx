import TimeCardHolder from './TimeCardHolder';
import SocialIcons from './SocialIcons';
import BackgroundImages from './BackgroundImages';
import background from '../assets/Rectangle.svg'


const Container = () => {
  return (
    <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h2 className='main-text'>WE'RE LAUNCHING SOON</h2>
        <TimeCardHolder/>
        <SocialIcons/>
        <BackgroundImages />
    </div>
  )
}

export default Container