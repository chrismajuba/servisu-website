import React, { useContext } from "react";
import SignIn from "../../modules/auth/sign_in/SignIn";
import { useNavigate } from "react-router-dom";
import { APIContext } from "../../modules/context/ContextProvider";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { authDetails, loginDetails } = useContext(APIContext);

  if (
    loginDetails != null &&
    authDetails != null &&
    authDetails.authenticated
  ) {
    navigate("/home");
  }
  return (
    <SignIn
      headerMessage={"Please fill in your details"}
      siginT="signup"
      onSuccess={() => navigate("/login")}
    />
  );
};

export default RegistrationPage;
