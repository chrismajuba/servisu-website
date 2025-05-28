import { createContext, useEffect, useState } from "react";
import {
  getUserAccount,
  loginRequest,
  registrationRequest,
} from "../services/api/WeServeService";
import { useNavigate } from "react-router-dom";

export const APIContext = createContext(null);

export const ContextProvider = (props) => {
  const navigate = useNavigate();

  const [authDetails, setAuthDetails] = useState(null);
  const [loginDetails, setLoginDetails] = useState(null);
  const [showSignInPopUp, setShowSignInPopUp] = useState(false);

  //Error pop up message
  const [serverError, setServerError] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  //Successful pop up message
  const [showSuccessfulPopup, setShowSuccessfulPopup] = useState(false);
  const [popHeaderMessage, setPopHeaderMessage] = useState("");
  const [successfulPopupMessage, setSuccessfulPopupMessage] = useState("");
  const [isLoading, setIsloading] = useState(false);

  //Login Method
  const login = (loginDto) => {
    return new Promise((resolve, reject) => {
      setIsloading(true);
      loginRequest(loginDto)
        .then((response) => {
          setAuthDetails(response.data);
          if (showSignInPopUp) {
            setShowSignInPopUp(false);
          }
          setIsloading(false);
          resolve(response); // Resolve the promise with the response
        })
        .catch((error) => {
          if (error.code === "ERR_NETWORK") {
            setServerError(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            setServerError(`[${error.message}] Connection timed out.`);
          } else {
            setServerError(
              error?.response?.data?.errorMessage || "Unknown error"
            );
          }
          setShowErrorPopup(true);
          setIsloading(false);
        });
    });
  };

  //Registration
  const register = (userRegistrationDto) => {
    return new Promise((resolve, reject) => {
      setIsloading(true);
      registrationRequest(userRegistrationDto)
        .then((response) => {
          showSuccessfulPopupMessageOnNavbar("Success", response.data.response);
          setIsloading(false);
          if (showSignInPopUp) {
            setShowSignInPopUp(false);
          }
          resolve(response); // Resolve with response
        })
        .catch((error) => {
          if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            showPopupMessageOnNavbar(
              `[${error.message}] Connection timed out.`
            );
          } else {
            showPopupMessageOnNavbar(
              error?.response?.data?.errorMessage || "Unknown error"
            );
          }
          setIsloading(false);
        });
    });
  };

  const showPopupMessageOnNavbar = (errorMessage) => {
    setServerError(errorMessage);
    setShowErrorPopup(true);
  };

  const showSuccessfulPopupMessageOnNavbar = (headerMessage, message) => {
    setPopHeaderMessage(headerMessage);
    setSuccessfulPopupMessage(message);
    setShowSuccessfulPopup(true);
  };

  useEffect(() => {
    //Get the account details
    getUserAccountDetails();
  }, [authDetails]);

  const getUserAccountDetails = () => {
    if (authDetails != null && authDetails.authenticated) {
      setIsloading(true);
      getUserAccount(authDetails?.accessToken)
        .then((response) => {
          setLoginDetails(response.data);
          setIsloading(false);
        })
        .catch((error) => {
          if (error.code === "ERR_NETWORK") {
            setServerError(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            setServerError(`[${error.message}] Connection timed out.`);
          } else {
            setServerError(error.response.data.errorMessage);
          }
          setShowErrorPopup(true);
          setIsloading(false);
        });
    }
  };

  //Logout Method
  const logout = () => {
    setAuthDetails(null);
    setLoginDetails(null);
    setShowSignInPopUp(false);
  };

  const contextValue = {
    authDetails,
    loginDetails,
    login,
    logout,
    register,
    getUserAccountDetails,
    isLoading,
    setIsloading,
    showSignInPopUp,
    setShowSignInPopUp,
    showErrorPopup,
    serverError,
    setShowErrorPopup,
    showPopupMessageOnNavbar,
    popHeaderMessage,
    successfulPopupMessage,
    showSuccessfulPopup,
    setShowSuccessfulPopup,
    showSuccessfulPopupMessageOnNavbar,
  };

  return (
    <APIContext.Provider value={contextValue}>
      {props.children}
    </APIContext.Provider>
  );
};
