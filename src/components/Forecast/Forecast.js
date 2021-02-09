import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions';
const Forecast = () => {
    let [city, setCity] = useState('')
    let [unit, setUnit] = useState('metric');
    let [responseObj, setResponseObj] = useState({});
    
    const uriEncodedCity = encodeURIComponent(city);
    
    function getForecast(e) {
        e.preventDefault();
        //weather data fetch
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d22313265bmsh872165291de8400p1f6bfdjsn6f8b3694f8f4",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})//fetch
        
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
    }//getforecast

    return (
        //JSX code
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value = {city}
                    onChange={(e) => setCity(e.target.value)} 
                    />
                    <label>
                        <input 
                            type="radio"
                            name="units"
                            checked={unit === "metric"}
                            value = "metric"
                            onChange ={(e) => setUnit(e.target.value)}
                            />
                            Celcius
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="units"
                            checked = {unit === "imperial"}
                            value = "imperial"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                            Farenheit
                    </label>
                    <button type="submit">Get Forecast</button>
            </form>
            <Conditions responseObj={responseObj} />
        </div>
    )
}
export default Forecast;