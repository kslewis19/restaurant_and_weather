import { FaSun, FaCloudRain, FaCloud } from "react-icons/fa";

function HourlyWeatherCard(props){
    if (props.index!=0){
        return(
    
            <div style={{borderWidth:5, backgroundColor: "lightblue", width:"40%", shadowColor: "black",shadowOpacity: 5.8,shadowRadius: 2,shadowOffset: {height: 100,width: 100 }}} >
                <h3> Hours From Now: {props.index}</h3>
                <p>Temperature: {props.hour.temp}</p>
                <p>Skys: {(props.hour.weather[0].main)} {(props.hour.weather[0].main)=="Clear"? <FaSun style={{color:"yellow"}}/>: (props.hour.weather[0].main)=="Clouds"? <FaCloud style={{color:"white"}}/>: (props.hour.weather[0].main)=="Rain"? <FaCloudRain style={{color:"blue"}}/>:"!"}</p>
                
            
            </div>
        )
    }
    else {
        return null
    }
}
export default HourlyWeatherCard;