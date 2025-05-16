import React from "react";
import "./daysOfweek.css"; // Optional: CSS for styling

const DaysOfWeek = ({ availability = "0000000" }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="days-of-week">
      {days.map((day, index) => {
        const isAvailable = availability[index] === "1";
        return (
          <span
            key={index}
            className={`day ${isAvailable ? "available" : "unavailable"}`}
          >
            {day}
          </span>
        );
      })}
    </div>
  );
};

export default DaysOfWeek;
