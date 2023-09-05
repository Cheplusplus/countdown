//@ts-check
/**
 * 
 * @param {Date} startDate 
 * @param {Date} endDate 
 * @returns {number[]}
 * 
 */
export const getTimeBetweenDates = (startDate, endDate) => {
    let days = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;
    let hours = days % Math.floor((days !== 0) ? 1 : days) * 24
    let minutes = hours % Math.floor((hours !== 0) ? 1 : hours) * 60
    let seconds = minutes % Math.floor((minutes !== 0) ? 1 : minutes) * 60
  
    return [
        parseInt(Math.floor(days).toLocaleString('en-US', {
            minimumIntegerDigits: 2})),
        parseInt(Math.floor(hours).toLocaleString('en-US', {
            minimumIntegerDigits: 2})),
        parseInt(Math.floor(minutes).toLocaleString('en-US', {
            minimumIntegerDigits: 2})),
        parseInt(Math.floor(seconds).toLocaleString('en-US', {
            minimumIntegerDigits: 2})),
    ]
  }
