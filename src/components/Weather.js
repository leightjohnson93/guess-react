
import React from 'react';

const Weather = (props) => {

  const Api_Key = '19a95fb3bc014d9c55721f2f50b75926';

  const getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`
    );
    const response = await api_call.json();
    console.log(response);
  }

  return(
       <div>  
      //weather conditions goes here
       </div>
   )
}
export default Weather;