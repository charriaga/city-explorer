import { useState } from 'react'
import axios from 'axios'
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const [location, setLocation] = useState({ display_name: 'City' });
  const [searchQuery, setSearchQuery] = useState('');

  //ChatGPT was consulted for this function
  async function fetchLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
    try {
      const response = await axios.get(API);
      const locationObj = response.data[0];
      setLocation(locationObj);
      if (!response.ok) { if (response.status === 401) {
          h1Message('error');
      } else {
        console.error('Error: status of ', response.status);
        return;
      } }
    } catch (error) {
      console.error('Error: undefined');
    }
  }

  function updateQuery(event) {
    setSearchQuery(event.target.value)
  }

  function h1Message (parameter) {
    if (parameter === 'error') {
      return 'API INVALID';
    } else {
      return (location.display_name + ' Information')
    }
  }

  // function errorMessage(message) {
  //   setModalState(true)
  //   return message;
  // }

  return (
    <>
      <div className='input'>
        <input onChange={updateQuery} />
        <button onClick={fetchLocation}>Explore!</button>
      </div>
      <h1>{h1Message('fine')}</h1>
      <h2>{location.lat} latitude, {location.lon} longitute</h2>
      <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=12&size=900x400&format=jpg&maptype=light/`} />
    </>
  )

}
export default App
