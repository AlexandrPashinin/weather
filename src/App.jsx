
import { useState } from 'react';
import './App.css';


function App() {
  const [city, setCity] = useState('')
  const [weather , setWeather] = useState({})

  const click = (e) =>{
    if (e.key === 'Enter'){
      
      fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {method: 'GET',
      headers: { 'X-Api-Key': 'fdSjR2X6OVE3FonP8hETvg==G6agMtWsF7kll8r2'}}  )
      .then(res=>res.json())
      .then(result=>{
        setWeather(result)
        
      })
    }
  }
  
  const dateNow =()=>{
    const days = [  'Monday','Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'] 
    const monts = ['January', ' February', 'March', 'April', 'May', ' June',' July', 'August', 'September', 
                   'October', ' November', ' December' ]
    let date = new Date()
    let day = days[date.getDay()]
    let number = date.getDate()
    let month  = monts[date.getMonth()]
  
    return `${day},  ${number} ${month}`
  }
  return (
    <div className="App">
      <main>
        <input
        className='input'
        type='text'
        placeholder='search city'
        onChange={e=>setCity(e.target.value)}
        value={city}
        onKeyPress={click}
        />
        <div className='shell'>
          <div className='city'>{city}   </div>
          <div className='date'> {dateNow()} </div>
          <div className='temperature'> {weather.temp} с </div>


        </div>
      </main>
    </div>
  );
}

export default App;
