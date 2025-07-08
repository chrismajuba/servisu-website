import { VerificationDto } from "../models/VerificationDto";
import "./verificationPopup.css";
import React, { useEffect, useState } from "react";
import { submitVerificationCode } from "../../services/api/WeServeService";
import { useContext } from "react";
import { APIContext } from "../../context/ContextProvider";
import LoadingScreen from "../../core/components/pop_up/progress_bar/LoadingScreen";

const VerificationPopup = ({
  headerMessage,
}) => {
    const {
      authDetails,
      loginDetails,
      setLoginDetails,
      logout, showPopupMessageOnNavbar, 
    } = useContext(APIContext);
  const [isLoading,setIsLoading] = useState(false);
  const [headertext] = useState(headerMessage);
  const [responseMessage, setResponseMessage] = useState();
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const sendVerificationCode = (e) => {
    e.preventDefault();
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);

      const verificationDto = new VerificationDto(
        loginDetails.email,
        verificationCode
      );

      submitVerificationCode(
        authDetails.accessToken,
        verificationDto
      )
        .then((response) => {
          setIsVerified(true);
          setLoginDetails(response.data);
          setResponseMessage("Email successfully verified!");
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.hasOwnProperty("status") && error.status === 401) {
            logout();
            showPopupMessageOnNavbar(error.message);
          } else if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            showPopupMessageOnNavbar(`[${error.message}] Connection timed out.`);
          } else {
            showPopupMessageOnNavbar(error.response.data.errorMessage);
          }
          setIsLoading(false);
        });
    } else {
      showPopupMessageOnNavbar("Please login to proceed.");
    }
  };

  useEffect(() => {
  }, []);


  if(isLoading){
    return <LoadingScreen/>;
  }

  return (
    <div className="verification-popup">
      {isVerified ? (
        <div className="verification-popup-container">
          <p className="response-message">{responseMessage}</p>
        </div>
      ) : (
        <>
          <div className="verification-popup-container">
            <p>{headertext}</p>
            <hr/>
          </div>
          <form onSubmit={sendVerificationCode} className="verification-popup-container">
            <input
              type="text"
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter Verification Code"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default VerificationPopup;
