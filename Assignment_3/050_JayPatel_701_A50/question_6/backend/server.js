const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

const PORT = 5000;


// ================================
// MIDDLEWARE
// ================================

app.use(cors());

app.use(express.json());


// ================================
// TEST ROUTE
// ================================

app.get("/", (req, res) => {

    res.send("Weather API Backend is Working!");

});


// ================================
// WEATHER API
// ================================

app.get("/api/weather", async (req, res) => {

    try {

        const city = req.query.city;


        // Check city
        if (!city) {

            return res.status(400).json({

                message: "Please enter city name"

            });

        }


        // ==================================
        // STEP 1: FIND CITY COORDINATES
        // ==================================

        const geoResponse = await axios.get(

            "https://geocoding-api.open-meteo.com/v1/search",

            {
                params: {

                    name: city,

                    count: 1,

                    language: "en",

                    format: "json"

                }
            }

        );


        if (
            !geoResponse.data.results ||
            geoResponse.data.results.length === 0
        ) {

            return res.status(404).json({

                message: "City not found"

            });

        }


        const location =
            geoResponse.data.results[0];


        const latitude =
            location.latitude;


        const longitude =
            location.longitude;


        // ==================================
        // STEP 2: GET WEATHER
        // ==================================

        const weatherResponse = await axios.get(

            "https://api.open-meteo.com/v1/forecast",

            {
                params: {

                    latitude: latitude,

                    longitude: longitude,

                    current:
                        "temperature_2m,relative_humidity_2m,wind_speed_10m",

                    timezone: "auto"

                }

            }

        );


        const weather =
            weatherResponse.data.current;


        // ==================================
        // SEND RESPONSE
        // ==================================

        res.json({

            city: location.name,

            country: location.country,

            latitude: latitude,

            longitude: longitude,

            temperature:
                weather.temperature_2m,

            humidity:
                weather.relative_humidity_2m,

            windSpeed:
                weather.wind_speed_10m,

            time:
                weather.time

        });


    } catch (error) {

        console.log(
            "Weather API Error:",
            error.message
        );


        res.status(500).json({

            message:
                "Unable to get weather information"

        });

    }

});


// ================================
// START SERVER
// ================================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});