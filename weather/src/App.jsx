import 'bootstrap/dist/css/bootstrap.min.css';
import FetchWeather from './components/FetchWeather';
import { Provider } from 'react-redux';
import store from './store/store';



function App() {
 

  return (
    <>
    <Provider store={store}>
      <FetchWeather/>
      </Provider>
    </>
  )
}

export default App
