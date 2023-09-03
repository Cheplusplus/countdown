import { useEffect, useState } from 'react'
import './App.css'
import { getTimeBetweenDates } from './getTimeBetweenDates';
import background from './assets/Rectangle.svg'
import mountains from './assets/Group 5.svg'
import stars from './assets/Combined Shape.svg'
import timeCards from './assets/Group 3 Copy.svg'
import pintrestLogo from './assets/Path(1).svg'
import instagramLogo from './assets/Shape.svg'
import facebookLogo from './assets/Path.svg'

function App() {

  const [endDate, setEndDate] = useState(new Date(2023, 9, 24, 9, 0, 0));
  const [timeBetween, setTimeBetween] = useState([0, 0, 0, 0])
  const timeLabels = ['days', 'hours', 'minutes', 'seconds']

  setInterval(() => {setTimeBetween(getTimeBetweenDates(new Date(), endDate))}, 1000)
  
  useEffect(() => {
    let d = new Date();
    d.setMonth(d.getMonth() + 1, 0);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    setEndDate(d);
  }, [])

  return (
      <>
        <div style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h2 className='main-text'>WE'RE LAUNCHING SOON</h2>
          <div className='time-card-holder'>
            
            {timeBetween.map((time, i) => 
              <div className='time-card'
                style={{
                  backgroundImage: `url(${timeCards})`,
                }}
                key={i}>
                <img className='time-card-img'
                  src={timeCards}>
                </img>
                <span className='time'>
                  {time}
                </span>
                <p className='time-card-label'>
                  {timeLabels[i].toUpperCase()}</p>
                </div>
            )}
          </div>

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
          
          <img className='background mountains'
            src={mountains}>
          </img>
          <img className='background stars'
            src={stars}>
          </img>
        </div>
      </>
  )
}

export default App
