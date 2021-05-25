import './App.css';
import { useState, useContext } from 'react';
import ZipCodeForm from './ZipCodeForm'
import WeatherViewer from './WeatherViewer'
import NavBar from "../NavBar.js";
import { PinDropSharp } from '@material-ui/icons';
import { LocationContext } from "../LocationContext"



function App(props) {
  const [weather, setWeather] = useState(null)
  const [forcast, setForcast] = useState(null)
  const [hasZip, setHasZip] = useState(false)
  const { zip, setZip, lat, setLat, lng, setLng, coords, setCoords } = useContext(LocationContext);


  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      {hasZip ? <WeatherViewer weather={weather} forcast={forcast} lat={lat} lng={lng} /> : <ZipCodeForm setHasZip={setHasZip} setWeather={setWeather} setForcast={setForcast} zip={zip} setZip={setZip} setLat={setLat} setLng={setLng} setCoords={setCoords} />}
    </div>
  );
}

export default App;
