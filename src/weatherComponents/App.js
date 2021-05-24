import './App.css';
import { useState } from 'react';
import ZipCodeForm from './ZipCodeForm'
import WeatherViewer from './WeatherViewer'
import NavBar from "../NavBar.js";




function App() {
  const [weather, setWeather] = useState(null)
  const [forcast, setForcast] = useState(null)
  const [hasZip, setHasZip] = useState(false)



  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      {hasZip ? <WeatherViewer weather={weather} forcast={forcast} /> : <ZipCodeForm setHasZip={setHasZip} setWeather={setWeather} setForcast={setForcast} />}
    </div>
  );
}

export default App;
