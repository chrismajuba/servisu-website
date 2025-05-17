import React from "react";
import MyRequests from "../../modules/user/components/requests/MyRequests";
import { useContext, useState, useEffect } from "react";
import { APIContext } from "../../modules/context/ContextProvider";
import { getUpdate } from "../../modules/services/api/WeServeService";
import LoadingScreen from "../../modules/core/components/pop_up/progress_bar/LoadingScreen";
import SignIn from "../../modules/auth/sign_in/SignIn";

const MyRequestsPage = () => {
  const {
    authDetails,
    loginDetails,
    setLoginDetails,
    setServerError,
    setShowErrorPopup,
  } = useContext(APIContext);
  const [isLoading, setIsLoading] = useState(false);
  const [eventStatusDto, setEventStatusDto] = useState(null);

  const getRequestUpdate = () => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);
      getUpdate(authDetails.accessToken, loginDetails.id)
        .then((response) => {
          setEventStatusDto(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error?.status === 401) {
            setLoginDetails(null);
            setServerError(error.response?.data?.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            setServerError(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            setServerError(`[${error.message}] Connection timed out.`);
          } else {
            setServerError(
              error.response?.data?.errorMessage || "Unexpected error"
            );
            setEventStatusDto(null);
          }
          setShowErrorPopup(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    getRequestUpdate();
  }, []);

  if (authDetails == null || !authDetails.authenticated) {
    return (
      <SignIn
        headerMessage={"Please login to your account or create one to proceed."}
      />
    );
  }

  if (isLoading) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }

  return <MyRequests eventStatusDto={eventStatusDto} />;
};

export default MyRequestsPage;
