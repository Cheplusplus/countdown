// @ts-check
import React from 'react'
import Layout from './components/Layout';
import { useTimeToEndOfMonth } from './useTimeToEndOfMonth';

function App() {
  /**
   * The update delay for the countdown timer
   * @type {number}
   */
  const delay = 1000;
  /**
   * The time remaining till the end of the month, represented as an Array 
 * [Days, Hours, Mins, Secs]
   * @type {Array<number>}
   */
  const timeBetween = useTimeToEndOfMonth(delay);

  return (
      <>
        <Layout timeBetween={timeBetween}/>
      </>
  )
}

export default App
