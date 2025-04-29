import React, { useContext } from "react";
import "./userAccountDetails.css";
import { APIContext } from "../../../context/ContextProvider";
import SignIn from "../../../auth/sign_in/SignIn";
import Verification from "../../../auth/verification/Verification";

const UserAccountDetails = () => {
  const { loginDetails } = useContext(APIContext);

  return loginDetails == null ? (
    <SignIn
      headerMessage={"Please login to access your account or create one."}
    />
  ) : (
    <div className="user-account">
      <div className="user-account-contents">
        <div className="user-account-header">
          <h2>Hi, {loginDetails.name + " " + loginDetails.surname}</h2>
          <hr></hr>
        </div>
        <div className="user-account-details">
          <div className="user-account-details-body">
            <div className="user-account-details-header">
              <h2>ACCOUNT DETAILS</h2>
            </div>
            <input type="text" value={loginDetails.name} readOnly />
            <input type="text" value={loginDetails.surname} readOnly />
            <input type="text" value={loginDetails.email} readOnly />
            <input type="text" value={loginDetails.cellNumber} readOnly />
          </div>

          {!loginDetails.emailVerified && (
            <>
              <div className="user-account-details-notification">
                <div className="user-account-details-header">
                  <h2>NOTIFICATION</h2>
                </div>
                <input
                  type="text"
                  value={"Please verify your email"}
                  readOnly
                />
              </div>
              <Verification />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAccountDetails;
