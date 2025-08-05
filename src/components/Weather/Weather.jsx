import Button from "../Button/Button.jsx";
import {useState} from "react";

export default function Weather() {
  const api = {
    key: 'dae4dcfcf73e0d31b12a081a182abfc2',
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const [status, setStatus] = useState('')
  const [weather, setWeather] = useState({})
  const [dark, setDark] = useState(false)
  const darkTheme = {
    backgroundColor: dark ? '#121212' : '#fff',
    color: dark ? '#fff' : '#121212',
  }
   function changeColorTheme(){
    setDark((prev) => !prev)
  }

  // useEffect(() => {
  //   if (weather?.name) {
  //     localStorage.setItem('lastCity', weather.name);
  //   }
  // }, [weather]);
  // // Загружаем последний город при монтировании
  // useEffect(() => {
  //   const lastCity = localStorage.getItem('lastCity');
  //   if (lastCity) {
  //     setStatus(lastCity);
  //     openWeatherApi(lastCity);
  //   }
  // }, []);

  async function openWeatherApi() {
    let res = await fetch(`${api.base}weather?q=${status}&units=metric&lang=ru&appid=${api.key}`)
    const data = await res.json()
    console.log(data)
    setWeather(data)
  }

  return (
    <>
      <label htmlFor="">
        <input
          type="text"
          placeholder={'Введите город'}
          onChange={(e) => setStatus(e.target.value)}
        />
        <Button onClick={openWeatherApi}>Найти</Button>
      </label>
      {weather.main?.temp !== undefined ?
        <div style={{...darkTheme}}>
          <p>{weather.name}</p>
          <p>{weather.main.temp}</p>
          <p>{weather.weather[0].description.toUpperCase()}</p>
        </div>
        :
        ''}
      <Button onClick={changeColorTheme}>Сменить тему</Button>
    </>
  )
}