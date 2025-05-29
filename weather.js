// api/weather.js
const fetch = require('node-fetch')

export default async function handler(req, res) {
    const { city } = req.query;  // Capture the city from the query parameter
    const apiKey = 'FJp7vZUZDRghiPrWhgkAcR8kBkxuGXGf';  // Replace with your actual API key

    try {
        // Check if city is provided in the query string
        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }

        // Fetch city data from AccuWeather API
        const keyUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?q=${city}&apikey=${apiKey}`;
        const response = await fetch(keyUrl);
        const data = await response.json();

        // Check if city data exists
        if (data.length === 0) {
            return res.status(404).json({ error: 'City not found' });
        }

        // Get city key and use it to fetch weather data
        const cityKey = data[0].Key;
        const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        // Send back the weather data
        return res.status(200).json(weatherData);
    } catch (error) {
        return res.status(500).json({ error: 'Unable to fetch weather data' });
    }
}
