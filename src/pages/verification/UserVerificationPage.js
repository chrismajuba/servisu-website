import React from "react";
import VerificationPopup from "../../modules/auth/verification/VerificationPopup";
import { useLocation } from "react-router-dom";

const UserVerificationPage = () => {
  const navLocation = useLocation();
  const headerMessage = navLocation.state || "Submit a verification code";

  return (
    <>
      <VerificationPopup headerMessage={headerMessage} />
    </>
  );
};

export default UserVerificationPage;
