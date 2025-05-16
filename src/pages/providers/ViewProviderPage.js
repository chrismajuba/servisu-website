import React from "react";
import ViewProvider from "../../modules/providers/components/view_provider/ViewProvider";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { APIContext } from "../../modules/context/ContextProvider";
import SignIn from "../../modules/auth/sign_in/SignIn";
const ViewProviderPage = () => {
  const { id } = useParams();
  const { loginDetails } = useContext(APIContext);

  if (loginDetails === null) {
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
