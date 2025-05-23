import React, { useContext, useEffect, useState } from "react";
import "./viewProvider.css";
import { getProvider } from "../../../services/api/WeServeService";
import { APIContext } from "../../../context/ContextProvider";
import { StarsReview } from "../../../core/components/rating/StarsReview";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import DaysOfWeek from "../../../core/components/utils/DaysOfWeek";
import { useNavigate } from "react-router-dom";

const RequestService = ({ providerId }) => {
  const { authDetails, logout, showPopupMessageOnNavbar } =
    useContext(APIContext);

  const [serviceProvider, setServiceProvider] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const getProviderDetails = () => {
    getProvider(authDetails.accessToken, providerId)
      .then((response) => {
        setServiceProvider(response.data);
        setIsLoaded(true);
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
          showPopupMessageOnNavbar(`[${error.message}] Connection timed out.`);
        } else {
          showPopupMessageOnNavbar(
            error.response?.data?.errorMessage || "Unexpected error"
          );
        }
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    getProviderDetails();
  }, [providerId]);

  if (!isLoaded) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }

  const { name, surname, experience, rating, occupation, availableWorkDays } =
    serviceProvider || {};

  return (
    <div className="view-provider">
      <div className="view-provider-contents">
        <div className="view-provider-left">
          <p className="title">Service Provider Details</p>
          <div className="view-provider-container">
            <div className="view-provider-details">
              <div className="view-provider-title multi-fields">
                <p>{name}</p>
                <p>{surname}</p>
              </div>
              <div className="view-provider-occupation">
                <p>{occupation?.name || "Unknown occupation"}</p>
              </div>
              <div className="view-provider-rating">
                <p className="experience">{experience} Year Experience</p>
                <div className="rating-box">
                  <StarsReview rating={rating} size={20} />
                  <p>{rating}</p>
                </div>
              </div>
              <div className="view-provider-availability">
                <p>Availability</p>
                <DaysOfWeek availability={availableWorkDays} />
              </div>
            </div>
          </div>
        </div>
        <div className="view-provider-right">
          <p className="title">Occupation Description </p>
          <p className="description">
            {occupation?.name || "Unknown occupation"}
          </p>
          <div className="description-contents">
            <p>{occupation?.description || "description not found..."}</p>
          </div>
        </div>
      </div>
      <button
        className="continue-btn"
        onClick={() =>
          navigate("/request-provider", { state: serviceProvider })
        }>
        Continue
      </button>
    </div>
  );
};

export default RequestService;
