import Layout from './components/Layout';
import { useTimeBetweenDates } from './useTimeBetweenDates';

function App() {

  const timeBetween = useTimeBetweenDates();

  return (
      <>
        <Layout timeBetween={timeBetween}/>
      </>
  )
}

export default App
