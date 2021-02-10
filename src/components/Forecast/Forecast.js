import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css'

const Forecast = () => {
    let [city, setCity] = useState('')
    let [unit, setUnit] = useState('metric');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);


    // const uriEncodedCity = encodeURIComponent(city);
    
    function getForecast(e) {
        e.preventDefault();

        if (city.length === 0)
        {
            return setError(true)
        }
        setError(false);
        setResponseObj({});
        
        setLoading(true);

        let uriEncodedCity = encodeURIComponent(city);
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
        if(response.cod !== 200)
        {
            throw new Error()
        }
        setResponseObj(response)
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
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
                    className = {classes.TextInput}
                    value = {city}
                    onChange={(e) => setCity(e.target.value)} 
                    />
                    <label className={classes.Radio}>
                        <input 
                            type="radio"
                            name="units"
                            checked={unit === "metric"}
                            value = "metric"
                            onChange ={(e) => setUnit(e.target.value)}
                            />
                            Celcius
                    </label>
                    <label className={classes.Radio}>
                        <input 
                            type="radio"
                            name="units"
                            checked = {unit === "imperial"}
                            value = "imperial"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                            Farenheitn
                    </label>
                    <button type="submit" className={classes.Button}>Get Forecast</button>
            </form>
            <Conditions 
            responseObj={responseObj} 
            error = {error}
            loading = {loading}
            />
        </div>
    )
}
export default Forecast;