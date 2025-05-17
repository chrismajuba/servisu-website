import React, { useContext, useEffect, useState } from "react";
import "./verification.css";
import {
  getVerificationCode,
  submitVerificationCode,
} from "../../services/api/WeServeService";
import { APIContext } from "../../context/ContextProvider";
import LoadingScreen from "../../core/components/pop_up/progress_bar/LoadingScreen";
import Timer from "../../core/components/utils/Timer";
import { VerificationDto } from "../models/VerificationDto";

const Verification = () => {
  const {
    authDetails,
    loginDetails,
    getUserAccountDetails,
    setLoginDetails,
    setShowErrorPopup,
    setServerError,
  } = useContext(APIContext);
  const [requestedCode, setRequestedCode] = useState(false);
  const [responseMessage, setResponseMessage] = useState(
    "Your e-mail has already been verified!"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [timer] = useState(600);
  const [timedOut, setTimedOut] = useState(false);
  const [verificationCode, setVerificationCode] = useState();
  const [isVerified, setIsVerified] = useState(
    loginDetails?.emailVerified?.emailVerified | false
  );
  const accountType = "user";

  const requestCode = () => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);
      getVerificationCode(
        authDetails.accessToken,
        loginDetails.email,
        accountType
      )
        .then((response) => {
          setResponseMessage(response.data.message);
          setIsLoading(false);
          setRequestedCode(true);
        })
        .catch((error) => {
          if (error.hasOwnProperty("status") && error.status === 401) {
            setLoginDetails(null); //To enforce login
            setServerError(error.response.data.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            setServerError(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            setServerError(`[${error.message}] Connection timed out.`);
          } else {
            setServerError(error.response.data.errorMessage);
          }
          setShowErrorPopup(true);
          setIsLoading(false);
        });
    } else {
      setServerError("Please login");
      setShowErrorPopup(true);
    }
  };

  const sendVerificationCode = () => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);

      const verificationDto = new VerificationDto(
        loginDetails.email,
        verificationCode
      );

      submitVerificationCode(
        authDetails.accessToken,
        verificationDto,
        accountType
      )
        .then((response) => {
          setResponseMessage(response.data.message);
          setIsLoading(false);
          setRequestedCode(true);
          setIsVerified(true);
        })
        .catch((error) => {
          if (error.hasOwnProperty("status") && error.status === 401) {
            setLoginDetails(null); //To enforce login
            setServerError(error.response.data.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            setServerError(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            setServerError(`[${error.message}] Connection timed out.`);
          } else {
            setServerError(error.response.data.errorMessage);
          }
          setShowErrorPopup(true);
          setIsLoading(false);
        });
    } else {
      setServerError("Please login");
      setShowErrorPopup(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setRequestedCode(false);
  }, [timedOut]);

  useEffect(() => {
    //Refresh the user details
    getUserAccountDetails();
  }, [isVerified]);

  if (isLoading) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }

  if (loginDetails != null && loginDetails.emailVerified) {
    return (
      <div className="verification">
        <div className="verification-contents">
          <div className="submit-code-container">
            <div className="response-message">
              <p>{responseMessage}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="verification">
      <div className="verification-contents">
        <h2>Please verify your Email Address to proceed</h2>
        {!requestedCode ? (
          <div className="request-code-container">
            <p>Request a verification code</p>
            <button onClick={requestCode}>Get code</button>
          </div>
        ) : (
          <div className="submit-code-container">
            <div className="response-message">
              <p>{responseMessage}</p>
            </div>
            <div className="timer">
              <p>Request another verification code in </p>
              <Timer initialSeconds={timer} timedOut={setTimedOut} />
            </div>
            <form onSubmit={sendVerificationCode} className="multi-fields-v">
              <input
                type="text"
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Verification Code"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verification;
