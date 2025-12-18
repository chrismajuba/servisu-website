import React, { useContext } from "react";
import ProviderSignIn from "../../modules/service_provider/components/auth/ProviderSignIn";
import { useNavigate } from "react-router-dom";
import { APIContext } from "../../modules/context/ContextProvider";

const ProviderLoginPage = () => {
  const navigate = useNavigate();
  const { authDetails, providerDetails, userType } = useContext(APIContext);
  if (
    providerDetails != null &&
    authDetails != null &&
    authDetails.authenticated &&
    userType === "provider"
  ) {
    navigate("/provider/account");
  }

  return (
    <ProviderSignIn
      headerMessage={"Service Provider Login"}
      siginT="signin"
      onSuccess={() => navigate("/provider/account")}
    />
  );
};

export default ProviderLoginPage;

