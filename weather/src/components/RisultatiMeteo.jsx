
import { BiWind } from "react-icons/bi"; 
import { WiHumidity } from "react-icons/wi"; 
import { FaTemperatureHigh } from "react-icons/fa"; 
import { FaTemperatureLow } from "react-icons/fa"; 
import { useSelector } from 'react-redux';


// Componente React che visualizza i risultati meteo per una città inserita nella barra di ricerca
const RisultatiMeteo = ({city}) => {
  // Utilizzo il hook useSelector di react-redux per ottenere lo stato globale
  // Estrarre i dati relativi al meteo e al giorno specifico dalla parte dello stato "weather"
  const { data: weather, day } = useSelector((state) => state.weather);
  return(
    <>
    {/* Verifica se ci sono dati meteo e giorni disponibili */}
      {weather && day &&( 
        <>
        {/* Sezione principale per visualizzare i risultati meteorologici */}
        <div className="bg-light bg-opacity-10 rounded-5 w-50 p-2 mb-5">
        <div className="text-center">
        <div className="display-3 "> {city}</div>
        
        <div className="display-1 ">{weather.main.temp}°C</div>
        <div className="display-5 ">
            {weather.weather[0].description}
             {/* Utilizza l'icona del tempo fornita dall'API OpenWeatherMap */}
            <img src= {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png `} height={60}/>
        </div>
        </div>
        {/* Sezione per visualizzare informazioni dettagliate come temperatura massima, temperatura minima, umidità e vento */}
        <div className=" d-flex my-4 justify-content-around bg-light bg-opacity-25 rounded-5 km/h">
            <div className="mx-3">Temp max:<br/> 
            {weather.main.temp_max}°C <FaTemperatureHigh /></div>
            <div className="mx-3">Temp min:<br/> 
            {weather.main.temp_min}°C <FaTemperatureLow /></div>
            <div className="mx-3">Humidity:<br/> 
            {weather.main.humidity}% <WiHumidity /></div>
            <div className="mx-3">Wind:<br/>
             {weather.wind.speed}KM/h <BiWind  /></div>
        </div>
         {/* Sezione per visualizzare le previsioni per oggi, domani e il giorno dopo */}
        <div className="d-flex justify-content-around mb-3">
        <div className="text-center bg-light bg-opacity-50 rounded-5 w-25 py-3">
              <p >Today</p>
              
              <p>{day.list[0].main.temp}°C <FaTemperatureHigh /></p>
              <p>{day.list[0].main.humidity} % <WiHumidity /></p>
              <p>{day.list[0].wind.speed} km/h  <BiWind  /></p>
             <img src= {`https://openweathermap.org/img/wn/${day.list[0].weather[0].icon}@2x.png`} alt="" height={60}/>
             <p>{day.list[0].weather[0].description}</p>
         </div>
         <div className="text-center bg-light bg-opacity-50 rounded-5 w-25 py-3">
              <p >Tomorrow</p>
              
              <p>{day.list[8].main.temp}°C <FaTemperatureHigh /></p>
              <p>{day.list[8].main.humidity} % <WiHumidity /></p>
              <p>{day.list[8].wind.speed} km/h  <BiWind  /></p>
             <img src= {`https://openweathermap.org/img/wn/${day.list[8].weather[0].icon}@2x.png`} alt="" height={60}/>
             <p>{day.list[8].weather[0].description}</p>
         </div>
         <div className="text-center bg-light bg-opacity-50 rounded-5 w-25 py-3">
              <p >Day After</p>
              
              <p>{day.list[16].main.temp}°C <FaTemperatureHigh /></p>
              <p>{day.list[16].main.humidity} % <WiHumidity /></p>
              <p>{day.list[16].wind.speed} km/h  <BiWind  /></p>
             <img src= {`https://openweathermap.org/img/wn/${day.list[16].weather[0].icon}@2x.png`} alt="" height={60}/>
             <p>{day.list[16].weather[0].description}</p>
         </div>
                
        </div>
        </div>
       
      </>
      )}


    </>
    )
  };

  export default RisultatiMeteo;



 
