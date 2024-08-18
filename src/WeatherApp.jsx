import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css"
export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo]=useState({
        city:"rawalpindi",
        feelslike:24,
       temp:51,
       tempMin:76,
       tempMax:78,
       humidity:21, 
        weather:"clear sky"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="main-container">

        <div  style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        
        </div>
    )
}