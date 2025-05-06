import React from "react";

export default function Header({ city, setCity, handleSubmit }) {
  return (
    <header className="border-bottom pb-3">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="search"
          className="form-control me-2"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </header>
  );
}
