import React from "react";
import "./providerCard.css";
import { AnimatedImgArray, assets } from "../../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const ProviderCard = ({ serviceProvider }) => {
  const navigate = useNavigate();

  const week = {
    monday: "",
    tuesday: "",
    wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  };

  const setUpAvailableDays = (availableDays) => {
    if (availableDays.length === 7) {
      //Monday
      if (availableDays[0] === "1") {
        week.monday = "Yes";
      } else {
        week.monday = "No";
      }

      //Tuesday
      if (availableDays[1] === "1") {
        week.tuesday = "Yes";
      } else {
        week.tuesday = "N0";
      }

      //Wednesday
      if (availableDays[2] === "1") {
        week.wednesday = "Yes";
      } else {
        week.wednesday = "No";
      }

      //Thurday
      if (availableDays[3] === "1") {
        week.Thursday = "Yes";
      } else {
        week.Thursday = "No";
      }

      //Friday
      if (availableDays[4] === "1") {
        week.Friday = "Yes";
      } else {
        week.Friday = "No";
      }

      //Saturday
      if (availableDays[5] === "1") {
        week.Saturday = "Yes";
      } else {
        week.Saturday = "No";
      }

      //Sunday
      if (availableDays[6] === "1") {
        week.Sunday = "Yes";
      } else {
        week.Sunday = "No";
      }
    }
  };

  setUpAvailableDays(serviceProvider.availableWorkDays.split(""));

  return (
    <div className="provider-card">
      <div className="provider-card-container">
        <div className="provider-img-container">
          <img src={AnimatedImgArray[serviceProvider.occupation.id]} alt="" />
        </div>
        <div className="provider-details">
          <h3>{serviceProvider.name + " " + serviceProvider.surname}</h3>
          <div className="occupation-details">
            <h3>Occupation</h3>
            <p>{serviceProvider.occupation.name}</p>
          </div>
          <div className="other-details">
            <p>{serviceProvider.rating}</p>
            <img src={assets.rating_star} alt="" />
          </div>
          <div>
            <button
              onClick={() => navigate("/request-service/" + serviceProvider.id)}
            >
              Request
            </button>
          </div>
        </div>
        <div className="provider-availability">
          <h3>Availability</h3>
          <div className="days">
            <p>Monday</p>
            <p>{week.monday}</p>
            <p>Tuesday</p>
            <p>{week.tuesday}</p>
            <p>Wednesday</p>
            <p>{week.wednesday}</p>
            <p>Thursday</p>
            <p>{week.Thursday}</p>
            <p>Friday</p>
            <p>{week.Friday}</p>
            <p>Saturday</p>
            <p>{week.Saturday}</p>
            <p>Sunday</p>
            <p>{week.Sunday}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
