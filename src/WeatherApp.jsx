import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function searchCity(cityName) {
    const apiKey = "36dbadda4844et80d39a8b26da0ofdb7";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityName}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      const current = response.data;
      setWeatherData((prev) => ({
        ...prev,
        temperature: Math.round(current.temperature.current),
        humidity: current.temperature.humidity,
        wind: Math.round(current.wind.speed),
        description: current.condition.description,
        date: new Date(current.time * 1000).toLocaleString(),
        icon: (
          <img
            src={current.condition.icon_url}
            alt={current.condition.description}
          />
        ),
        city: current.city,
      }));
    });

    axios.get(forecastUrl).then((response) => {
      const forecastDays = response.data.daily.slice(1, 6); // Next 5 days
      const forecastElements = forecastDays.map((day, index) => {
        const date = new Date(day.time * 1000);
        const weekday = date.toLocaleDateString("en-US", { weekday: "short" });

        return (
          <div key={index} className="col-2 text-center">
            <div className="fw-bold">{weekday}</div>
            <img
              src={day.condition.icon_url}
              alt={day.condition.description}
              width="50"
            />
            <div>
              <span className="fw-bold">
                {Math.round(day.temperature.maximum)}°
              </span>{" "}
              / {Math.round(day.temperature.minimum)}°
            </div>
          </div>
        );
      });

      setWeatherData((prev) => ({
        ...prev,
        forecast: (
          <div className="row justify-content-center">{forecastElements}</div>
        ),
      }));
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  return (
    <div className="weather-app container bg-white p-4 mt-5 rounded shadow">
      <Header city={city} setCity={setCity} handleSubmit={handleSubmit} />
      {weatherData && (
        <Main
          city={weatherData.city}
          temperature={weatherData.temperature}
          humidity={weatherData.humidity}
          wind={weatherData.wind}
          description={weatherData.description}
          date={weatherData.date}
          icon={weatherData.icon}
          forecast={weatherData.forecast}
        />
      )}
      <Footer />
    </div>
  );
}
