import { FaSun, FaCloudRain, FaCloud } from "react-icons/fa";

function DailyWeatherCard(props){

if (props.index!=0){
    return(

        <div style={{borderWidth:5, backgroundColor: "lightblue", width:"40%", shadowColor: "black",shadowOpacity: 5.8,shadowRadius: 2,shadowOffset: {height: 100,width: 100 }}} >
            <h3> {props.index==1? "Tommorow":("Days From Today: "+props.index)}</h3>
            <p>Temperature: {props.day.temp.day}</p>
            <p>High: {props.day.temp.max}</p>
            <p>Low: {props.day.temp.min}</p>
            
            
            
            
            <p>Skys: {(props.day.weather[0].main)} {(props.day.weather[0].main)=="Clear"? <FaSun style={{color:"yellow"}}/>: (props.day.weather[0].main)=="Clouds"? <FaCloud style={{color:"white"}}/>: (props.day.weather[0].main)=="Rain"? <FaCloudRain style={{color:"blue"}}/>:"!"}</p>
            
        
        </div>
    )
}
else {
    return null
}
}
export default DailyWeatherCard;