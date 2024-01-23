
import { configureStore } from '@reduxjs/toolkit';
// Importa il riduttore per lo stato meteorologico
import WeatherReduce from '../reducers/WeatherReduce';

 
// Configura lo store di Redux utilizzando Redux Toolkit
const store = configureStore ({
  reducer: {
      // Associa il riduttore allo stato 'weather' nello store
    weather: WeatherReduce,          
  },
});

export default store;

