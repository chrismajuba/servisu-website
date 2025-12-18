import React, { useContext, useEffect, useState } from "react";
import "./userAccountDetails.css";
import { APIContext } from "../../../context/ContextProvider";
import SignIn from "../../../auth/sign_in/SignIn";
import UserNav from "../user_navbar/UserNavBar";
import { getUpdate } from "../../../services/api/WeServeService";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import MyRequests from "../requests/MyRequests";
import SecuritySettings from "../settings/Security";
import Support from "../support/Support";
import UserDetails from "../user_details/UserDetails";
import UserDashboard from "../dashboard/UserDashboard";

const UserAccountDetails = () => {
  const { authDetails, loginDetails, logout, showPopupMessageOnNavbar } =
    useContext(APIContext);
  const [isLoading, setIsLoading] = useState(false);
  const [eventStatusDto, setEventStatusDto] = useState(null);
  const [currentPage, setCurrentPage] = useState("Dashboard");

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
            logout();
            showPopupMessageOnNavbar(error.response?.data?.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            showPopupMessageOnNavbar(
              `[${error.message}] Connection timed out.`
            );
          } else {
            showPopupMessageOnNavbar(
              error.response?.data?.errorMessage || "Unexpected error"
            );
            setEventStatusDto(null);
            setIsLoading(false);
          }
        });
    }
  };

  useEffect(() => {
    if (currentPage === "Requests") {
      getRequestUpdate();
    }
  }, [currentPage]);

  if (authDetails === null || !authDetails?.authenticated) {
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
      <div className="dashboard-header">
        <h1>{currentPage === "Dashboard" ? "My Dashboard" : currentPage}</h1>
        <UserNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      {currentPage === "Dashboard" && <UserDashboard />}

      {currentPage === "Account" && (
        <UserDetails
          authDetails={authDetails}
          loginDetails={loginDetails}
          showPopupMessageOnNavbar={showPopupMessageOnNavbar}
          logout={logout}
        />
      )}

      {currentPage === "Requests" && (
        <MyRequests eventStatusDto={eventStatusDto} />
      )}

      {currentPage === "Security" && (
        <SecuritySettings
          loginDetails={loginDetails}
          showPopupMessageOnNavbar={showPopupMessageOnNavbar}
          authDetails={authDetails}
          logout={logout}
        />
      )}

      {currentPage === "Support" && <Support />}
    </div>
  );
};

export default UserAccountDetails;
