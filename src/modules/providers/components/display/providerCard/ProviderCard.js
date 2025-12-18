import React from "react";
import "./ProviderCard.css";
import { AnimatedImgArray, assets } from "../../../../../assets/assets";
import { useNavigate } from "react-router-dom";
import DaysOfWeek from "../../../../core/components/utils/DaysOfWeek";

const ProviderCard = ({ serviceProvider }) => {
  const navigate = useNavigate();

  return (
    <div className="provider-card">
      <div className="provider-card-container">
        <div className="provider-img-container">
          <img src={AnimatedImgArray[serviceProvider.occupation.id]} alt="" />
        </div>
        <div className="provider-details">
          <h3>{serviceProvider.fullName}</h3>
          <div className="occupation-details">
            <h3>{serviceProvider.occupation.name}</h3>
          </div>
          <div className="rating-details">
            <p>{serviceProvider.rating}</p>
            <img src={assets.rating_star} alt="" />
          </div>
          <div>
            <button
              onClick={() => navigate("/view-provider/" + serviceProvider.id)}>
              View
            </button>
          </div>
        </div>
        {/* <div className="provider-availability">
          <h3>Availability</h3>
          <DaysOfWeek availability={serviceProvider?.availableWorkDays} />
        </div> */}
      </div>
    </div>
  );
};

export default ProviderCard;
