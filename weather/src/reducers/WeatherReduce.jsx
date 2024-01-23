
import { createSlice } from '@reduxjs/toolkit';
// Crea uno slice di Redux per gestire lo stato meteorologico
const WeatherReduce = createSlice({
      // Nome dello slice, utilizzato come prefisso per le azioni generate automaticamente
  name: 'weather',
  // Stato iniziale dello slice
  initialState: {
    data: null,// Dati meteorologici correnti
    day: null, // Dati delle previsioni per la giorn
    
  },
  reducers: {  // Riduttori, funzioni che definiscono come lo stato cambia in risposta alle azioni
    setWeatherData: (state, action) => {
      state.data = action.payload;
    },
    setDay: (state, action) => {  // Riduttore per impostare i dati delle previsioni per la giornata
      state.day = action.payload;
    },
  },
});

export const { setWeatherData, setDay } = WeatherReduce.actions; // Estrai le azioni generate automaticamente dallo slice
export default WeatherReduce.reducer;// Esporta il riduttore generato automaticamente dallo slice


