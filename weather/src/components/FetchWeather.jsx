
import React, { useState } from "react";
import BarraRicerca from "./BarraRicerca";
import RisultatiMeteo from "./RisultatiMeteo";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, setDay } from '../reducers/WeatherReduce';

// Componente principale che gestisce il recupero e la visualizzazione dei dati meteo
function FetchWeather() {
   // Stato locale per la gestione della città inserita dall'utente
  const [city, setCity] = useState("");
  {// const [weatherData, setWeatherData] = useState(null);
  // const [day, setDay] = useState(null);
  }
  const dispatch = useDispatch(); // Dispatch per inviare azioni allo store di Redux
  const { data: weather, day } = useSelector((state) => state.weather);
// Utilizza il selettore di react-redux per ottenere lo stato globale
  const fetchSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=472fd5a8a4862dffcd7119a94ee5bc4a&units=metric`
        );
        const data = await response.json();
        
        // setWeatherData(data);
        dispatch(setWeatherData(data));  // Dispaccia un'azione per aggiornare lo stato di Redux con i dati meteo correnti
      } catch (error) {
        console.error("Errore nel recupero dei dati ", error);
      }
    };
// Funzione per recuperare i dati meteo futuri
    const fetchForecast = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f64327af1492cb6b843fb2420be96e9&lang=en&units=metric`);
        const data = await response.json();
        // setDay(data);
        dispatch(setDay(data)); // Dispaccia un'azione per aggiornare lo stato di Redux con i dati meteo correnti
        console.log(data);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };
    // Funzione per gestire la ricerca quando l'utente preme il pulsante di ricerca
    const handleSearch = () => {
      if (city.length > 3) {
        // Esegui il recupero dei dati correnti e delle previsioni
        fetchSearch();
        fetchForecast();
      }
    };
    
    
  return (
    <>
    {/* Sezione per la barra di ricerca */}
      <Container className="p-5 radius my-5 rounded-5">
        <BarraRicerca
          city={city}
          handleSearch={handleSearch}
          setCity={setCity}
          
          />
          {/* Sezione per visualizzare i risultati meteorologici */}
      </Container>
      <Container className="d-flex justify-content-center " >
        <RisultatiMeteo city={city} />
      </Container>
    </>
  );
}

export default FetchWeather;


