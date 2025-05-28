import React, { useContext } from "react";
import ProvidersGrid from "../../modules/providers/components/display/ProvidersGrid";
import { APIContext } from "../../modules/context/ContextProvider";
import SignIn from "../../modules/auth/sign_in/SignIn";
import { useLocation } from "react-router-dom";

const ProvidersPage = () => {
  const { authDetails, loginDetails } = useContext(APIContext);
  const navLocation = useLocation();
  const occupation = navLocation.state || -1;

  if (
    authDetails === null ||
    !authDetails?.authenticated ||
    loginDetails == null
  ) {
    return (
      <SignIn
        headerMessage={
          "Please login to your account or create one to access our services"
        }
      />
    );
  } else {
    return (
      <div>
        <ProvidersGrid occupation={occupation} />
      </div>
    );
  }
};
export default ProvidersPage;
