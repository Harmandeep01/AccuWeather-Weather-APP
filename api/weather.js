export default async function handler(req, res) {
    const { city } = req.query;  // Capture the city from the query parameter
    const apiKey = 'FJp7vZUZDRghiPrWhgkAcR8kBkxuGXGf';  // Replace with your API key
  
    try {
      if (!city) {
        return res.status(400).json({ error: 'City name is required' });
      }
  
      // Fetch city data from AccuWeather API
      const keyUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?q=${city}&apikey=${apiKey}`;
      const response = await fetch(keyUrl);
      const data = await response.json();
  
      if (data.length === 0) {
        return res.status(404).json({ error: 'City not found' });
      }
  
      const cityKey = data[0].Key;
      const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
  
      // Send back the weather data
      return res.status(200).json(weatherData);
    } catch (error) {
      return res.status(500).json({ error: 'Unable to fetch weather data' });
    }
  }
  