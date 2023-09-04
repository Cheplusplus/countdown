import '../App.css'
import timeCards from '../assets/Group 3 Copy.svg'

const TimeCardHolder = ({timeBetween}) => {

    const timeLabels = ['days', 'hours', 'minutes', 'seconds']

  return (
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
  )
}

export default TimeCardHolder