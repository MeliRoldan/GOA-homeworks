import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const ApiUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';
  const ApiKey = '6eeca69cf9174700a3791b8f136a4b5a';

  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Tbilisi");
  const [cityInput, setCityInput] = useState("");

  const handleCity = (e) => {
    setCityInput(e.target.value)
  }

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch(`${ApiUrl}?city=${city}&key=${ApiKey}`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()
        setWeatherData(data.data);
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    } 

    getWeatherData();
  },[city]);

  const submitCity = () => {
    setCity(cityInput);
  }

  return (
    <>
      <div>
        <section className="w-full h-auto bg-[#e3e9ff] flex flex-col justify-center items-center p-5">
          <div className="flex justify-center items-center gap-3 pt-20">
              <input onChange={handleCity} type="text" placeholder="ENTER CITY NAME:" className="px-4 py-2 rounded-3xl w-96 outline-sky-700 outline-offset-2 shadow-md"/>
              <button onClick={submitCity} className="p-3 rounded-full bg-white shadow-md hover:cursor-pointer"><FaSearch /></button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 p-20">
            {weatherData.map((day,index) => (
              <Card key={index}
              cityName={city}
              maxTemp={day.max_temp}
              datetime={day.datetime}
              windSpeed={day.wind_spd}
              description={day.weather.description}
              icon={day.weather.icon}
              dewpt={day.dewpt}/>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default App