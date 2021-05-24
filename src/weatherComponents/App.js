import './App.css';
import { useState } from 'react';
import ZipCodeForm from './ZipCodeForm'
import WeatherViewer from './WeatherViewer'
import NavBar from "../NavBar.js";
import { PinDropSharp } from '@material-ui/icons';




function App(props) {
  const [weather, setWeather] = useState(null)
  const [forcast, setForcast] = useState(null)
  const [hasZip, setHasZip] = useState(false)
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);



  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      {hasZip ? <WeatherViewer weather={weather} forcast={forcast} lat={lat} lng={lng} /> : <ZipCodeForm setHasZip={setHasZip} setWeather={setWeather} setForcast={setForcast} zip={props.match.params.zip} setLat={setLat} setLng={setLng} />}
    </div>
  );
}

export default App;
