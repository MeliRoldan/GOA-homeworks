import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

function Card({cityName, maxTemp, datetime, windSpeed, description, icon, dewpt}) {
  const iconUrl = `https://www.weatherbit.io/static/img/icons/${icon}.png`;

  return (
    <div className="bg-sky-700 px-2 py-5 flex flex-col justify-center items-center gap-5 rounded-md">
      <div className="text-white flex flex-col justify-center items-center">
        <p>{datetime}</p>
        <img src={iconUrl} alt="" className="w-28"/>
        <h1 className="text-3xl">{maxTemp}</h1>
        <h2 className="text-xl">{description}</h2>
        <h3 className="text-l">{cityName}</h3>
      </div>
      <div className="flex justify-between items-center gap-8 text-white">
        <div className="flex justify-start items-center">
          <div className="text-3xl"><WiHumidity /></div>
          <div>
            <p className="text-sm">{dewpt}%</p>
            <p className="text-sm">Humidity</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-3">
          <div className="text-2xl"><FiWind /></div>
          <div className="pe-4">
            <p className="text-sm">{windSpeed}km/hr</p>
            <p className="text-sm">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;