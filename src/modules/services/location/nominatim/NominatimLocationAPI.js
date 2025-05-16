import React, { useState } from "react";

function LocationFetcher() {
  const [location, setLocation] = useState(null);
  const [street, setStreet] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude, accuracy, altitude, speed } =
            position.coords;

          setLocation({ latitude, longitude, accuracy, altitude, speed });
          setError(null);

          // Reverse geocoding using Nominatim (OpenStreetMap)
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const road = data.address?.road || "Unknown Street";
            setStreet(road);
          } catch (err) {
            setStreet("Failed to fetch street name.");
          }
        },
        (err) => {
          setError("Error: " + err.message);
          setLocation(null);
        }
      );
    }
  };

  return (
    <div>
      <h2>Get Current Location</h2>
      <button onClick={getLocation}>Get Location</button>

      {location && (
        <div style={{ marginTop: "1rem" }}>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Accuracy: {location.accuracy} meters</p>
          <p>
            Altitude:{" "}
            {location.altitude !== null
              ? `${location.altitude} m`
              : "Not available"}
          </p>
          <p>
            Speed:{" "}
            {location.speed !== null
              ? `${location.speed} m/s`
              : "Not available"}
          </p>
          <p>Street: {street}</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default LocationFetcher;
