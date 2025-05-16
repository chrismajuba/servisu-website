import React, { useState } from "react";

function LocationFetcher() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude,
          });
          setError(null);
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
        <p>
          Latitude: {location.latitude} <br />
          Longitude: {location.longitude} <br />
          Altitude: {location.altitude}
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default LocationFetcher;
