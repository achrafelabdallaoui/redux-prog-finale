
import { BiWind } from "react-icons/bi"; 
import { WiHumidity } from "react-icons/wi"; 
import { FaTemperatureHigh } from "react-icons/fa"; 
import { FaTemperatureLow } from "react-icons/fa"; 
import { useSelector } from 'react-redux';
import {Container , Row , Col} from 'react-bootstrap';




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
        <Container className="bg-light bg-opacity-25 rounded-5 w-100 p-3 mb-5"> 
        {/* ho aggiunto il Componente Bootstrap Container per rendere l app responsive */}
          <Row>
        <Col className="text-center"> 
        {/* ho scellto di mettere solo il componente Col senza aggiungere niente che ho trovato che questo e il metodo piu snello e veloce per renderlo responsive su tutti i despositivi (mobile , tablet , desktop) */}
        <div className="display-3 "> {city}</div>
        
        <div className="display-1 ">{weather.main.temp}°C</div>
        <div className="display-5 ">
            {weather.weather[0].description}
             {/* Utilizza l'icona del tempo fornita dall'API OpenWeatherMap */}
            <img src= {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png `} height={60}/>
        </div>
        
        {/* Sezione per visualizzare informazioni dettagliate come temperatura massima, temperatura minima, umidità e vento */}
        <div className=" d-flex my-4 justify-content-around bg-light bg-opacity-25 rounded-5  p-2">
            <div className="p-2">Temp max:<br/> 
            {weather.main.temp_max}°C <FaTemperatureHigh />
            </div>
            <div className="p-2">Temp min:<br/> 
            {weather.main.temp_min}°C <FaTemperatureLow />
            </div>
            <div className="p-2">Humidity:<br/> 
            {weather.main.humidity}% <WiHumidity />
            </div>
            <div className="p-2">Wind:<br/>
             {weather.wind.speed}KM/h <BiWind  />
             </div>
        </div>
        </Col>
         {/* Sezione per visualizzare le previsioni per oggi, domani e il giorno dopo */}
        <Col className="d-flex w-100 mb-3">
        <div className="text-center bg-light bg-opacity-50 rounded-5 w-100 mx-4 py-3">
              <p >Today</p>
              
              <p>{day.list[0].main.temp}°C <FaTemperatureHigh /></p>
              <p>{day.list[0].main.humidity} % <WiHumidity /></p>
              <p>{day.list[0].wind.speed} km/h  <BiWind  /></p>
             <img src= {`https://openweathermap.org/img/wn/${day.list[0].weather[0].icon}@2x.png`} alt="" height={60}/>
             <p>{day.list[0].weather[0].description}</p>
         </div>
         <div className="text-center bg-light bg-opacity-50 rounded-5 w-100 mx-4 py-3">
              <p >Tomorrow</p>
              
              <p>{day.list[8].main.temp}°C <FaTemperatureHigh /></p>
              <p>{day.list[8].main.humidity} % <WiHumidity /></p>
              <p>{day.list[8].wind.speed} km/h  <BiWind  /></p>
             <img src= {`https://openweathermap.org/img/wn/${day.list[8].weather[0].icon}@2x.png`} alt="" height={60}/>
             <p>{day.list[8].weather[0].description}</p>
         </div>
         <div className="text-center bg-light bg-opacity-50 rounded-5 w-100 mx-4 py-3">
              <p >Day After</p>
              
              <p>{day.list[16].main.temp}°C <FaTemperatureHigh /></p>
              <p>{day.list[16].main.humidity} % <WiHumidity /></p>
              <p>{day.list[16].wind.speed} km/h  <BiWind  /></p>
             <img src= {`https://openweathermap.org/img/wn/${day.list[16].weather[0].icon}@2x.png`} alt="" height={60}/>
             <p>{day.list[16].weather[0].description}</p>
         </div>
                
        </Col>
        </Row>
        </Container>
       
      </>
      )}


    </>
    )
  };

  export default RisultatiMeteo;



 
