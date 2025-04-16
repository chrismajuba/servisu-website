import React, { useContext } from "react";
import "./userAccount.css";
import { APIContext } from "../../components/context/ContextProvider";

const UserAccount = () => {
  const { loginDetails } = useContext(APIContext);

  return loginDetails != null ? (
    <div className="user-account">
      <div className="user-account-contents">
        <div className="user-account-header">
          <h2 className="user-greeting">
            Hi, {loginDetails.name + " " + loginDetails.surname}
          </h2>
          <hr></hr>
        </div>
        <div className="user-account-details">
          <div className="user-account-details-header">
            <h2>ACCOUNT DETAILS</h2>
          </div>

          <p>{loginDetails.name}</p>
          <p>{loginDetails.surname}</p>
          <p className={loginDetails.isEmailVerified ? "verified" : ""}>
            {loginDetails.email}
          </p>
          <p>{loginDetails.cellNumber}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="login-signup-message">
      <p>Please login or Sign up</p>
      <hr></hr>
    </div>
  );
};

export default UserAccount;
