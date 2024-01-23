// Stato iniziale dello store per le preferenze
const initialState = {
  favourite: {
    list: [],
  },
}

// Reduttore principale che gestisce le azioni per le preferenze
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      // Azione per aggiungere un elemento alla lista delle preferenze
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      }

    case 'REMOVE_FROM_FAVOURITE':
      // Azione per rimuovere un elemento dalla lista delle preferenze
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      }

    // Azione predefinita per gestire azioni sconosciute o non gestite
    default:
      return state
  }
}


export default mainReducer
