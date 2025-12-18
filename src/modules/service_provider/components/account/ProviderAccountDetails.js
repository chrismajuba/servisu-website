import React, { useContext, useEffect, useState } from "react";
import "./providerAccountDetails.css";
import { APIContext } from "../../../context/ContextProvider";
import SignIn from "../../../auth/sign_in/SignIn";
import ProviderNavBar from "../provider_navbar/ProviderNavBar";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import ProviderDashboard from "../dashboard/ProviderDashboard";
import ProviderRequests from "../requests/ProviderRequests";
import ProviderProfile from "../profile/ProviderProfile";
import ProviderAvailability from "../availability/ProviderAvailability";
import ProviderSecurity from "../settings/ProviderSecurity";
import Support from "../../../user/components/support/Support";

const ProviderAccountDetails = () => {
  const {
    authDetails,
    providerDetails,
    logout,
    showPopupMessageOnNavbar,
  } = useContext(APIContext);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  if (authDetails === null || !authDetails?.authenticated || !providerDetails) {
    return (
      <SignIn
        headerMessage={
          "Please login as a Service Provider to access your account or register."
        }
      />
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="provider-account-dashboard">
      <h1>{currentPage}</h1>
      <ProviderNavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "Dashboard" && <ProviderDashboard />}

      {currentPage === "Requests" && <ProviderRequests />}

      {currentPage === "Profile" && (
        <ProviderProfile
          authDetails={authDetails}
          providerDetails={providerDetails}
          showPopupMessageOnNavbar={showPopupMessageOnNavbar}
          logout={logout}
        />
      )}

      {currentPage === "Availability" && <ProviderAvailability />}

      {currentPage === "Security" && (
        <ProviderSecurity
          providerDetails={providerDetails}
          showPopupMessageOnNavbar={showPopupMessageOnNavbar}
          authDetails={authDetails}
          logout={logout}
        />
      )}

      {currentPage === "Support" && <Support />}
    </div>
  );
};

export default ProviderAccountDetails;

