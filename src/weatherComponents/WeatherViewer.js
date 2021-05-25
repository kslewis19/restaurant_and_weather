import './App.css';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import DailyWeatherCard from './DailyWeatherCard'
import HourlyWeatherCard from './HourlyWeatherCard'
import { FaSun, FaCloudRain, FaCloud } from "react-icons/fa";
import { Link } from "react-router-dom";

function WeatherViewer(props) {
    const [isDaily, setIsDaily] = useState(true)


    const daily = <div style={{ display: "flex", flex: 1, minHeight: "100%", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        Daily Weather

    {props.forcast.daily.map((daily, key) => (
        <DailyWeatherCard day={daily} index={key} />

    ))}

    </div>
    const hourly = <div style={{ display: "flex", flex: 1, minHeight: "100%", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        Hourly Weather

    {props.forcast.hourly.map((hourly, key) => (
        <HourlyWeatherCard hour={hourly} index={key} />

    ))}

    </div>

    const toggleDaily = () => {
        setIsDaily(!isDaily)
    }

    console.log(props.weather)
    console.log(props.forcast)
    if (props.weather.name != null) {
        return (
            <div style={{ flex: 1 }}>
                <h1>Weather in {props.weather.name}</h1>
                <h2> The current temerature is {props.weather.main.temp} F</h2>
                <h2> Sky Condition: {props.weather.weather[0].main} {(props.weather.weather[0].main) == "Clear" ? <FaSun style={{ color: "yellow" }} /> : (props.weather.weather[0].main) == "Clouds" ? <FaCloud style={{ color: "white" }} /> : (props.weather.weather[0].main) == "Rain" ? <FaCloudRain style={{ color: "blue" }} /> : "!"}</h2>
                <Button onClick={toggleDaily} variant="contained"> Toggle Forcast</Button>
                <Button
                    variant="contained"
                    color="default"
                >
                    <Link to={`/restaurants`}> Find Restaurants Here </Link>
                </Button>
                <br />
                {isDaily ? daily : hourly}

            </div>

        )
    }
    else {
        return (
            <div> Error bad zip</div>
        )
    }
}

export default WeatherViewer;