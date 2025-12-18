import React, { useState, useEffect, useContext } from "react";
import "./providerAvailability.css";
import { APIContext } from "../../../context/ContextProvider";
import DaysOfWeek from "../../../core/components/utils/DaysOfWeek";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import { updateServiceProviderAvailability } from "../../../services/api/WeServeService";

const ProviderAvailability = () => {
  const { authDetails, showPopupMessageOnNavbar, logout, providerDetails, getServiceProviderAccountDetails } =
    useContext(APIContext);
  const [isLoading, setIsLoading] = useState(false);
  const [days, setDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  useEffect(() => {
    // Load current availability from provider details
    if (providerDetails?.availableWorkDays) {
      const availability = providerDetails.availableWorkDays;
      const daysArray = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      const newDays = {};
      daysArray.forEach((day, index) => {
        newDays[day] = availability[index] === "1";
      });
      setDays(newDays);
    }
  }, [providerDetails]);

  const handleDayChange = (day) => {
    setDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const convertDaysToAvailabilityString = () => {
    const daysArray = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return daysArray.map((day) => (days[day] ? "1" : "0")).join("");
  };

  const handleSave = () => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);
      const availabilityString = convertDaysToAvailabilityString();
      
      updateServiceProviderAvailability(authDetails.accessToken, availabilityString)
        .then(() => {
          setIsLoading(false);
          showPopupMessageOnNavbar("Availability updated successfully");
          // Refresh provider details
          if (getServiceProviderAccountDetails) {
            getServiceProviderAccountDetails();
          }
        })
        .catch((error) => {
          if (error?.status === 401) {
            logout();
            showPopupMessageOnNavbar(error.response?.data?.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            showPopupMessageOnNavbar(
              `[${error.message}] Connection timed out.`
            );
          } else {
            showPopupMessageOnNavbar(
              error.response?.data?.errorMessage || "Unexpected error"
            );
          }
          setIsLoading(false);
        });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="availability-container">
      <div className="availability-contents">
        <h2 className="availability-header">Manage Availability</h2>
        
        <div className="current-availability">
          <h3>Current Availability</h3>
          <DaysOfWeek availability={convertDaysToAvailabilityString()} />
        </div>

        <div className="availability-form">
          <h3>Select Available Days</h3>
          <div className="days-selection">
            {Object.keys(days).map((day) => (
              <div key={day} className="day-checkbox">
                <input
                  type="checkbox"
                  id={day}
                  checked={days[day]}
                  onChange={() => handleDayChange(day)}
                />
                <label htmlFor={day}>{day}</label>
              </div>
            ))}
          </div>
          <button className="save-button" onClick={handleSave}>
            Save Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderAvailability;

