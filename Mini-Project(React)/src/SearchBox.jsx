import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, Setcity] = useState("");
    let [error, SetError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = process.env.REACT_APP_API_KEY;


    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        Setcity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            Setcity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch (err) {
            SetError(true);
        }
    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit' onChange={handleChange}>Submit</Button>
                {error && <p style={{ color: "red" }}>No such place exist!</p>}
            </form>
        </div>
    )
}
