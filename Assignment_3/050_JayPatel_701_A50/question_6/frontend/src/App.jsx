import { useState } from "react";
import axios from "axios";

import "./App.css";


function App() {

    const [city, setCity] = useState("");

    const [weather, setWeather] = useState(null);

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);


    const getWeather = async () => {

        setError("");

        setWeather(null);


        if (!city.trim()) {

            setError("Please enter city name");

            return;

        }


        try {

            setLoading(true);


            const response = await axios.get(

                "http://localhost:5000/api/weather",

                {
                    params: {
                        city: city
                    }
                }

            );


            setWeather(response.data);


        } catch (error) {

            console.log(error);

            setError(

                error.response?.data?.message ||

                "Unable to get weather"

            );

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="container">

            <h1>
                Weather Utility
            </h1>


            <p>
                Get current weather information
            </p>


            <div className="search-box">

                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) =>
                        setCity(e.target.value)
                    }
                />


                <button
                    onClick={getWeather}
                >
                    Get Weather
                </button>

            </div>


            {loading && (

                <p className="loading">
                    Loading weather...
                </p>

            )}


            {error && (

                <p className="error">
                    {error}
                </p>

            )}


            {weather && (

                <div className="weather-card">

                    <h2>
                        {weather.city}
                    </h2>


                    <p>
                        Country:
                        {" "}
                        {weather.country}
                    </p>


                    <h3>
                        Temperature:
                        {" "}
                        {weather.temperature} °C
                    </h3>


                    <p>
                        Humidity:
                        {" "}
                        {weather.humidity} %
                    </p>


                    <p>
                        Wind Speed:
                        {" "}
                        {weather.windSpeed} km/h
                    </p>


                    <p>
                        Time:
                        {" "}
                        {weather.time}
                    </p>

                </div>

            )}

        </div>

    );

}


export default App;