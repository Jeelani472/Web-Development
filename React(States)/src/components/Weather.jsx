import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const OPENWEATHER_API_KEY = "20ec30b398d36ddf199771457ca5c958"; // Replace with your OpenWeather API Key

  // Function to get latitude and longitude using OpenStreetMap API
  const getCoordinates = async (location) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
      );

      if (response.data.length === 0) {
        throw new Error("Location not found");
      }

      const { lat, lon } = response.data[0];
      return { lat, lon };
    } catch (error) {
      console.error("Error getting coordinates:", error);
      throw new Error("Failed to get coordinates");
    }
  };

  // Fetch Weather Data
  const getWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching weather:", error);
      throw new Error("Failed to get weather data");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setWeather(null);

    try {
      const { lat, lon } = await getCoordinates(location);
      const weatherData = await getWeather(lat, lon);
      setWeather(weatherData);
    } catch (error) {
      setError(error.message || "Failed to fetch weather data.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Weather Conditions</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or place"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Get Weather
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Weather in {weather.name}</h2>
          <ul className="mt-4 text-lg">
            <li>🌡️ <strong>Temperature:</strong> {weather.main.temp} °C</li>
            <li>🌥️ <strong>Condition:</strong> {weather.weather[0].description}</li>
            <li>💧 <strong>Humidity:</strong> {weather.main.humidity}%</li>
            <li>💨 <strong>Wind Speed:</strong> {weather.wind.speed} m/s</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Weather;