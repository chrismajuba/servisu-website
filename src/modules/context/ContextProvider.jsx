import { createContext, useState } from "react";
import { loginRequest, getProviders } from "../services/api/WeServeService";
import { UserRegistrationDto } from "../user/models/UserRegistrationDto";
import ServiceProvider from "../providers/models/ServiceProvider";
import { LoginDto } from "../user/models/LoginDto";
import { LoginDetails } from "../user/models/LoginDetails";

export const APIContext = createContext(null);

export const ContextProvider = (props) => {
  const [loginDetails, setLoginDetails] = useState(null);
  const [serviceProviders, setServiceProviders] = useState([]);
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
        if(showPopUp){
         setShowPopUp(false); //loginPopup
        }
    }
      )
      .catch((error) => {
        console.log(error.response.data.errorMessage);
        setServerError(error.response.data.errorMessage);
        setShowErrorPopup(true);
        setIsloading(false);});
  }

  //registration
  const register = (UserRegistrationtDto) =>{

  }

  //Logout Method
  const logout = () => {
    //logout`
  };

  const requestProviders = () => {
    setIsloading(true);
    if (loginDetails !== null) {
      getProviders(loginDetails.accessToken)
        .then((response) => {
          setServiceProviders(response.data);
          setIsloading(false)})
        .catch((error) => {
          
          if(error.status === 401){
            setLoginDetails(null) //To enforce login
          }
          console.error("Failed to fetch providers:", error);
          setServerError(error.response.data.errorMessage);
          setShowErrorPopup(true);
          setIsloading(false)});
          
    } else {
      setServerError("Please login or register");
      setShowErrorPopup(true);
      setIsloading(false);
    }
  };

  const contextValue = {
    loginDetails,
    serviceProviders,
    login,
    register,
    logout,
    requestProviders,
    isLoading,
    setIsloading,
    showPopUp,
    setShowPopUp,
    showErrorPopup,
    setShowErrorPopup,
    serverError
  };

  return (
    <APIContext.Provider value={contextValue}>
      {props.children}
    </APIContext.Provider>
  );
};
