import './App.css';
import { useState, useContext } from 'react';
import ZipCodeForm from './ZipCodeForm'
import WeatherViewer from './WeatherViewer'
import NavBar from "../NavBar.js";
import { LocationContext } from "../LocationContext"
import { ThemeContext } from "../ThemeContext"
import { makeStyles } from '@material-ui/core/styles';



function App(props) {
  const [weather, setWeather] = useState(null)
  const [forcast, setForcast] = useState(null)
  const [hasZip, setHasZip] = useState(false)
  const { zip, setZip, lat, setLat, lng, setLng, coords, setCoords } = useContext(LocationContext);



  const { isDark } = useContext(ThemeContext)
  const useStyles = makeStyles((theme) => {
    if (isDark) {
      return (

        {
          root: {
            backgroundColor: "black", minHeight: "100vh",
            color: "white"
          },

        })
    }
    else return (
      {
        root: {
          backgroundColor: "beige", minHeight: "100vh"
        },

      }
    )
  });
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      {hasZip ? <WeatherViewer weather={weather} forcast={forcast} lat={lat} lng={lng} /> : <ZipCodeForm setHasZip={setHasZip} setWeather={setWeather} setForcast={setForcast} zip={zip} setZip={setZip} setLat={setLat} setLng={setLng} setCoords={setCoords} />}
    </div>
  );
}

export default App;
