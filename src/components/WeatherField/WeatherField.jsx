import React from 'react'
import './WeatherField.css'

const WeatherField = ({data}) => {
  const city = data.name;
  const temperature = Math.round(data.main.temp);
  const weatherName = data.weather[0].main;
  const humidity = data.main.humidity;
  const windSpeed = Math.round(data.wind.speed)

  return (
    <div className='weather-field'>
        <div className='weather-card'>
            <span className='city'>{city}</span>
            <div className='weather'>
                <span className='temperature'>{temperature}</span>
                <img src={`./weather-images/${weatherName}.png`} alt="weather" />
            </div>

            <div className='weather-details'>
                <span className='humidity'>Humidity: {humidity}%</span>
                <span className='wind'>Wind: {windSpeed} m/s</span>
            </div>
        </div>
    </div>
  )
}

export default WeatherField
