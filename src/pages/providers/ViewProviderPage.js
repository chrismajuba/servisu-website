import React from "react";
import ViewProvider from "../../modules/providers/components/view_provider/ViewProvider";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { APIContext } from "../../modules/context/ContextProvider";
import SignIn from "../../modules/auth/sign_in/SignIn";
const ViewProviderPage = () => {
  const { id } = useParams();
  const { authDetails } = useContext(APIContext);

  if (authDetails === null || !authDetails?.authenticated) {
    return (
      <SignIn headerMessage={"Please login or create an account to continue"} />
    );
  } else {
    return (
      <>
        <ViewProvider providerId={id} />
      </>
    );
  }
};

export default ViewProviderPage;
