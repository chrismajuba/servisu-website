import React, { useContext, useEffect, useState } from "react";
import "./userAccountDetails.css";
import { APIContext } from "../../../context/ContextProvider";
import SignIn from "../../../auth/sign_in/SignIn";
import UserNav from "../user_navbar/UserNavBar";
import { getUpdate } from "../../../services/api/WeServeService";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import MyRequests from "../requests/MyRequests";
import { useNavigate } from "react-router-dom";
import SecuritySettings from "../settings/Security";

const UserAccountDetails = () => {
  const {
    authDetails,
    loginDetails,
    setLoginDetails,
    setServerError,
    setShowErrorPopup,
  } = useContext(APIContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [eventStatusDto, setEventStatusDto] = useState(null);
  const [currentPage, setCurrentPage] = useState("Account");

  const getRequestUpdate = () => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);
      getUpdate(authDetails?.accessToken, loginDetails?.id)
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

  const emailButtonFunction = () => {
    if (!loginDetails?.emailVerified) {
      navigate("/account/verify");
    } else {
      //edit function
    }
  };

  useEffect(() => {
    if (currentPage === "Requests") {
      getRequestUpdate();
    }
  }, [currentPage]);

  if (authDetails == null || !authDetails?.authenticated) {
    return (
      <SignIn
        headerMessage={"Please login to access your account or create one."}
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

  return (
    <div className="user-account-dashboard">
      <h1>{currentPage}</h1>
      <UserNav setCurrentPage={setCurrentPage} />

      {currentPage === "Account" && (
        <div className="user-account">
          <div className="user-account-contents">
            <div className="details-container">
              <h2>Full Name</h2>
              <div className="row">
                <p>{loginDetails?.name + " " + loginDetails?.surname}</p>
                <button>Edit</button>
              </div>
              <hr />
            </div>

            <div className="details-container">
              <h2>Email Address</h2>
              <div className="row">
                <p>{loginDetails?.email}</p>
                <button onClick={emailButtonFunction}>
                  {!loginDetails?.emailVerified ? "Verify Email" : "Edit"}
                </button>
                <div className="unverified"></div>
              </div>
              <hr />
            </div>

            <div className="details-container">
              <h2>Cell Number</h2>
              <div className="row">
                <p>{loginDetails?.cellNumber}</p>
                <button>Edit</button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      )}

      {currentPage === "Requests" && (
        <MyRequests eventStatusDto={eventStatusDto} />
      )}

      {currentPage === "Security" && (
        <SecuritySettings loginDetails={loginDetails} />
      )}
    </div>
  );
};

export default UserAccountDetails;
