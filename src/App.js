import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RestaurantApp  from './restaurantComponents/App.js'
import WeatherApp from './weatherComponents/App.js'

function App() {
  return (
    <div className="App">
     <WeatherApp/>
    </div>
  );
}

export default App;
