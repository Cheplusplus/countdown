import { useState, useEffect } from "react";
import { getTimeBetweenDates } from './getTimeBetweenDates';

export const useTimeBetweenDates = () => {

    const [endDate, setEndDate] = useState(new Date());
    const [timeBetween, setTimeBetween] = useState([0, 0, 0, 0])
  
    setInterval(() => {setTimeBetween(getTimeBetweenDates(new Date(), endDate))}, 1000)
    
    useEffect(() => {
        let d = new Date();
        d.setMonth(d.getMonth() + 1, 0);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        setEndDate(d);
        console.log(timeBetween);
    }, [])
    
    return timeBetween
}