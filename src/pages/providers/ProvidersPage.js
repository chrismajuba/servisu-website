import React, { useContext } from "react";
import ProvidersGrid from "../../modules/providers/components/display/ProvidersGrid";
import { APIContext } from "../../modules/context/ContextProvider";
import SignIn from "../../modules/auth/sign_in/SignIn";

const ProvidersPage = () => {
  const { authDetails } = useContext(APIContext);

  if (authDetails === null || !authDetails?.authenticated) {
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
        <ProvidersGrid />
      </div>
    );
  }
};
export default ProvidersPage;
