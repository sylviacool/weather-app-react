import React from "react";

export default function Main({
  city,
  temperature,
  humidity,
  wind,
  description,
  date,
  icon,
  forecast,
}) {
  return (
    <main className="py-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1>{city}</h1>
          <p className="text-muted">
            {date}, {description}
            <br />
            Humidity: <strong>{humidity}</strong>%, Wind:{" "}
            <strong>{wind}</strong> km/h
          </p>
        </div>
        <div className="d-flex align-items-center">
          <div>{icon}</div>
          <div className="fw-bold fs-1 ms-3">{temperature}°</div>
        </div>
      </div>
      <div className="weather-forecast mt-4">{forecast}</div>
    </main>
  );
}
