import { createContext, useEffect, useState } from "react";
import { getUserAccount, loginRequest } from "../services/api/WeServeService";

export const APIContext = createContext(null);

export const ContextProvider = (props) => {
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
    setIsloading(true);
    loginRequest(loginDto)
      .then((response) => {
        setAuthDetails(response.data);
        //If the login popup is open
        if (showSignInPopUp) {
          setShowSignInPopUp(false); //loginPopup
        }
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
