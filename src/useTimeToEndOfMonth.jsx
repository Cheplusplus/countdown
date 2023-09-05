// @ts-check
import { useState, useEffect } from "react";
import { getTimeBetweenDates } from './getTimeBetweenDates';

/**
 * 
 * @template T
 * @typedef {[T, import('react').Dispatch<import('react').SetStateAction<T>>]} useState
 */

/**
 * This hook runs once when the page loads and creates an interval which will run once every second
 * and return the time remaining till the end of the month, represented as an Array 
 * [Days, Hours, Mins, Secs].
 * @prop {number} delay
 * @returns {Array<number>} 
 * */
export const useTimeToEndOfMonth = (delay) => {

    /**
     * Manages the state for the end date of the countdown
     * @type {useState<Date>}
     */
    const [endDate, setEndDate] = useState(new Date());

    /**
     * Manages the state for the amount of time until the end of the month in 
     * Days, Hours, Minutes, Seconds
     * @type {useState<Array<number>>}
     */
    const [timeToEndOfMonth, setTimeToEndOfMonth] = useState([0, 0, 0, 0]);
    
    setInterval(() => {
        setTimeToEndOfMonth(getTimeBetweenDates(new Date(), endDate))
    }, delay)
    
    useEffect(() => {          
        let d = new Date();
        d.setMonth(d.getMonth() + 1, 0);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        setEndDate(d);


    }, [])
    
    return timeToEndOfMonth
}