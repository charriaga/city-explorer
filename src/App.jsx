import { useState } from 'react'
import axios from 'axios'
import ErrorModal from 'src/components/ErrorModal'
import './App.css'

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const [location, setLocation] = useState({ display_name: 'City' }, { lat: '47.6038321' }, { lon: '-122.330062' });
  const [searchQuery, setSearchQuery] = useState('');
  const [modalState, setModalState] = useState(false)

  async function fetchLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
    const response = await axios.get(API);
    const locationObj = response.data[0];
    setLocation(locationObj);

  }

  function updateQuery(event) {
    setSearchQuery(event.target.value)
  }

  function errorMessage (message) {
    setModalState(true)
    return message;
  }

  return (
    <>
      <div className='input'>
        <input onChange={updateQuery} />
        <button onClick={fetchLocation}>Explore!</button>
      </div>
      <ErrorModal show={modalState} message={errorMessage}/>
      <h1>{location.display_name} Information</h1>
      <h2>{location.lat} latitude, {location.lon} longitute</h2>
      <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=12&size=900x400&format=jpg&maptype=light/`} />
    </>
  )

}
export default App
