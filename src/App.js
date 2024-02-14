import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import WeatherField from './components/WeatherField/WeatherField';

function App() {
  const [cityName, setCityName] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(0);
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState(<></>);

  function handleChange(event) {
    setCityName(event.target.value);
  }

  async function handleClick() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
      setData(await response.json());
      
      if (response.status === 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setError(
          <span className="error">Wrong country or city</span>
        )
      }

    } catch (error) {
      console.log('Something went wrong while fetching');
    }
  }

  return (
    <div className="App">
      <Search handleChange={handleChange} handleClick={handleClick}></Search>
      {isVisible ? <WeatherField data={data}></WeatherField> : error}
    </div>
  );
}

export default App;