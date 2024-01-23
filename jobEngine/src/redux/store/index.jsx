import { configureStore } from '@reduxjs/toolkit';

// Importa il reduttore principale
import mainReducer from '../reducers/mainReducer';

// Configura lo store di Redux utilizzando Redux Toolkit
const store = configureStore({
  // Specifica il reduttore principale per gestire lo stato dell'applicazione
  reducer: mainReducer,
});

// Esporta lo store configurato
export default store;

