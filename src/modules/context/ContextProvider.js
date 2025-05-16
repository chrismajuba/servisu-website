import { createContext, useState } from "react";
import { loginRequest } from "../services/api/WeServeService";

export const APIContext = createContext(null);

export const ContextProvider = (props) => {
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
        setLoginDetails(response.data);
        setIsloading(false);

        //If the login popup is open
        if (showPopUp) {
          setShowPopUp(false); //loginPopup
        }
      })
      .catch((error) => {
        console.error(error);
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

  //Logout Method
  const logout = () => {
    setLoginDetails(null);
    setShowPopUp(false);
  };

  const contextValue = {
    loginDetails,
    setLoginDetails,
    login,
    logout,
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
