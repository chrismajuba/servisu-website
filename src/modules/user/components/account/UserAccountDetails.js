import React, { useContext, useEffect, useState } from "react";
import "./userAccountDetails.css";
import { APIContext } from "../../../context/ContextProvider";
import SignIn from "../../../auth/sign_in/SignIn";
import UserNav from "../user_navbar/UserNavBar";
import { getUpdate } from "../../../services/api/WeServeService";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import MyRequests from "../requests/MyRequests";
import { useNavigate } from "react-router-dom";

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

      {(currentPage === "Dashboard" || currentPage === "Account") && (
        <div className="user-account">
          <div className="user-account-contents">
            <div className="user-account-header">
              <h2>Hi, {loginDetails?.name + " " + loginDetails?.surname}</h2>
              <hr></hr>
            </div>
            <div className="user-account-details">
              <div className="user-account-details-body">
                <div className="user-account-details-header">
                  <h2>ACCOUNT DETAILS</h2>
                </div>
                <input type="text" value={loginDetails?.name} readOnly />
                <input type="text" value={loginDetails?.surname} readOnly />
                <input type="text" value={loginDetails?.email} readOnly />
                <input type="text" value={loginDetails?.cellNumber} readOnly />
              </div>

              {!loginDetails?.emailVerified && (
                <>
                  <div className="user-account-details-notification">
                    <div className="user-account-details-header">
                      <h2>NOTIFICATION</h2>
                    </div>
                    <input
                      type="text"
                      value={"Please verify your email"}
                      readOnly
                    />
                    <div className="email-verification-button-container">
                      <button onClick={() => navigate("/account/verify")}>
                        Verify Email
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {currentPage === "Requests" && (
        <MyRequests eventStatusDto={eventStatusDto} />
      )}
    </div>
  );
};

export default UserAccountDetails;
