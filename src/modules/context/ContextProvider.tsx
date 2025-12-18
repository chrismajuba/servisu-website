import { createContext, useEffect, useState, ReactNode } from "react";
import {
  getUserAccount,
  loginRequest,
  registrationRequest,
  getServiceProviderAccount,
  serviceProviderLoginRequest,
  serviceProviderRegistrationRequest,
} from "../services/api/WeServeService";
import { AuthDetails } from "../auth/models/AuthDetails";
import { LoginDetails } from "../user/models/LoginDetails";
import { ServiceProviderDetails } from "../service_provider/models/ServiceProviderDetails";
import { LoginDto } from "../user/models/LoginDto";
import { UserRegistrationDto } from "../user/models/UserRegistrationDto";
import { ServiceProviderLoginDto } from "../service_provider/models/ServiceProviderLoginDto";
import { ServiceProviderRegistrationDto } from "../service_provider/models/ServiceProviderRegistrationDto";

/**
 * Context value interface
 */
export interface APIContextValue {
  authDetails: AuthDetails | null;
  loginDetails: LoginDetails | null;
  providerDetails: ServiceProviderDetails | null;
  userType: "user" | "provider" | null;
  login: (loginDto: LoginDto) => Promise<any>;
  logout: () => void;
  register: (userRegistrationDto: UserRegistrationDto) => Promise<any>;
  providerLogin: (loginDto: ServiceProviderLoginDto) => Promise<any>;
  providerRegister: (providerRegistrationDto: ServiceProviderRegistrationDto) => Promise<any>;
  getUserAccountDetails: () => void;
  getServiceProviderAccountDetails: () => void;
  isLoading: boolean;
  setIsloading: (loading: boolean) => void;
  showSignInPopUp: boolean;
  setShowSignInPopUp: (show: boolean) => void;
  showErrorPopup: boolean;
  serverError: string | null;
  setShowErrorPopup: (show: boolean) => void;
  showPopupMessageOnNavbar: (errorMessage: string) => void;
  popHeaderMessage: string;
  successfulPopupMessage: string;
  showSuccessfulPopup: boolean;
  setShowSuccessfulPopup: (show: boolean) => void;
  showSuccessfulPopupMessageOnNavbar: (headerMessage: string, message: string) => void;
}

export const APIContext = createContext<APIContextValue | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = (props: ContextProviderProps) => {
  const [authDetails, setAuthDetails] = useState<AuthDetails | null>(null);
  const [loginDetails, setLoginDetails] = useState<LoginDetails | null>(null);
  const [providerDetails, setProviderDetails] = useState<ServiceProviderDetails | null>(null);
  const [userType, setUserType] = useState<"user" | "provider" | null>(null);
  const [showSignInPopUp, setShowSignInPopUp] = useState<boolean>(false);

  //Error pop up message
  const [serverError, setServerError] = useState<string | null>(null);
  const [showErrorPopup, setShowErrorPopup] = useState<boolean>(false);

  //Successful pop up message
  const [showSuccessfulPopup, setShowSuccessfulPopup] = useState<boolean>(false);
  const [popHeaderMessage, setPopHeaderMessage] = useState<string>("");
  const [successfulPopupMessage, setSuccessfulPopupMessage] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);

  //Login Method
  const login = (loginDto: LoginDto): Promise<any> => {
    return new Promise((resolve, reject) => {
      setIsloading(true);
      loginRequest(loginDto)
        .then((response) => {
          setAuthDetails(response.data);
          setUserType("user");
          if (showSignInPopUp) {
            setShowSignInPopUp(false);
          }
          setIsloading(false);
          resolve(response);
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
          reject(error);
        });
    });
  };

  //Registration
  const register = (userRegistrationDto: UserRegistrationDto): Promise<any> => {
    return new Promise((resolve, reject) => {
      setIsloading(true);
      registrationRequest(userRegistrationDto)
        .then((response) => {
          showSuccessfulPopupMessageOnNavbar("Success", response.data.response);
          setIsloading(false);
          if (showSignInPopUp) {
            setShowSignInPopUp(false);
          }
          resolve(response);
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
          reject(error);
        });
    });
  };

  const showPopupMessageOnNavbar = (errorMessage: string): void => {
    setServerError(errorMessage);
    setShowErrorPopup(true);
  };

  const showSuccessfulPopupMessageOnNavbar = (headerMessage: string, message: string): void => {
    setPopHeaderMessage(headerMessage);
    setSuccessfulPopupMessage(message);
    setShowSuccessfulPopup(true);
  };

  useEffect(() => {
    //Get the account details based on user type
    if (userType === "user") {
      getUserAccountDetails();
    } else if (userType === "provider") {
      getServiceProviderAccountDetails();
    }
  }, [authDetails, userType]);

  const getUserAccountDetails = (): void => {
    if (authDetails != null && authDetails.authenticated && userType === "user") {
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
            setServerError(error.response?.data?.errorMessage || "Unknown error");
          }
          setShowErrorPopup(true);
          setIsloading(false);
        });
    }
  };

  const getServiceProviderAccountDetails = (): void => {
    if (authDetails != null && authDetails.authenticated && userType === "provider") {
      setIsloading(true);
      getServiceProviderAccount(authDetails?.accessToken)
        .then((response) => {
          setProviderDetails(response.data);
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
            setServerError(error.response?.data?.errorMessage || "Unknown error");
          }
          setShowErrorPopup(true);
          setIsloading(false);
        });
    }
  };

  //Service Provider Login Method
  const providerLogin = (loginDto: ServiceProviderLoginDto): Promise<any> => {
    return new Promise((resolve, reject) => {
      setIsloading(true);
      serviceProviderLoginRequest(loginDto)
        .then((response) => {
          console.log("response", response);
          setAuthDetails(response.data);
          setUserType("provider");
          if (showSignInPopUp) {
            setShowSignInPopUp(false);
          }
          setIsloading(false);
          resolve(response);
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
          reject(error);
        });
    });
  };

  //Service Provider Registration
  const providerRegister = (providerRegistrationDto: ServiceProviderRegistrationDto): Promise<any> => {
    return new Promise((resolve, reject) => {
      setIsloading(true);
      serviceProviderRegistrationRequest(providerRegistrationDto)
        .then((response) => {
          console.log("response", response);
          showSuccessfulPopupMessageOnNavbar("Success", response.data.response);
          setIsloading(false);
          if (showSignInPopUp) {
            setShowSignInPopUp(false);
          }
          resolve(response);
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
          reject(error);
        });
    });
  };

  //Logout Method
  const logout = (): void => {
    setAuthDetails(null);
    setLoginDetails(null);
    setProviderDetails(null);
    setUserType(null);
    setShowSignInPopUp(false);
  };

  const contextValue: APIContextValue = {
    authDetails,
    loginDetails,
    providerDetails,
    userType,
    login,
    logout,
    register,
    providerLogin,
    providerRegister,
    getUserAccountDetails,
    getServiceProviderAccountDetails,
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

