import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const[weatherInfo,SetWeatherInfo]=useState({
        city: "Delhi",
        feelslike: 24.87,
        temp: 21.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 77,
        weather: "haze"
    })

    let updateInfo=(newInfo)=>{
        SetWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox newInfo={weatherInfo}/>
        </div>
    )
}
