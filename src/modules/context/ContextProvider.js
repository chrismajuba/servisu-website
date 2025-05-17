import { createContext, useEffect, useState } from "react";
import { getUserAccount, loginRequest } from "../services/api/WeServeService";

export const APIContext = createContext(null);

export const ContextProvider = (props) => {
  const [authDetails, setAuthDetails] = useState(null);
  const [loginDetails, setLoginDetails] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  //Login Method
  const login = (loginDto) => {
    setIsloading(true);
    loginRequest(loginDto)
      .then((response) => {
        setAuthDetails(response.data);
        //If the login popup is open
        if (showPopUp) {
          setShowPopUp(false); //loginPopup
        }
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
    setShowPopUp(false);
  };

  const contextValue = {
    authDetails,
    loginDetails,
    setLoginDetails,
    login,
    logout,
    getUserAccountDetails,
    isLoading,
    setIsloading,
    showPopUp,
    setShowPopUp,
    showErrorPopup,
    setShowErrorPopup,
    serverError,
    setServerError,
  };

  return (
    <APIContext.Provider value={contextValue}>
      {props.children}
    </APIContext.Provider>
  );
};
