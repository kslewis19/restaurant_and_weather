import './App.css';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';



const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

function ZipCodeForm(props) {

  const [zip, setZip] = useState("")

  useEffect(() => {
    if (props.zip != "0") fetchWeather(props.zip)
  }, [])


  const fetchWeather = (zip) => {

    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("zip", zip);
    url.searchParams.append("units", "imperial");
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        if (obj.cod === 200) {
          props.setWeather(obj);
          fetchForcast(obj.coord.lat, obj.coord.lon)
        } else {
          props.setWeather(false);
        }


      });
  }

  const fetchForcast = (lat, lon) => {
    console.log(lat, lon)
    props.setLat(lat)
    props.setLng(lon)
    const formated = lat + "," + lon
    props.setCoords(formated)
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall")
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("lat", lat)
    url.searchParams.append("lon", lon)
    url.searchParams.append("units", "imperial");
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        props.setForcast(obj);
        props.setHasZip(true)

      });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("zip submited ", zip)
    props.setZip(zip)
    fetchWeather(zip)



  }

  return (
    <div>
      <h1>Welcome to the Weather App!</h1>
      <h2> Please enter your zip code bellow:</h2>
      <form method="post" onSubmit={handleSubmit}>
        <TextField name='value' value={zip} onChange={(event) => { setZip(event.target.value) }} placeholder={'enter zip code'} >
        </TextField>
        <Button type="submit" variant="contained">Search</Button>

      </form>
    </div>
  )
}

export default ZipCodeForm;