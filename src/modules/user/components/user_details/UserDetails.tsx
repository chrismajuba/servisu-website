import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userDetails.css";
import { LoginDetails } from "../../models/LoginDetails";
import { updateUserAccount } from "../../../services/api/WeServeService";
import { ModifyUserAccountDto } from "../../models/ModifyUserAccountDto";
import { ModificationType } from "../../models/ModificationType";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import { AuthDetails } from "../../../auth/models/AuthDetails";

interface props {
  loginDetails: LoginDetails;
  authDetails: AuthDetails;
  showPopupMessageOnNavbar: Function;
  logout: Function;
}

const UserDetails: React.FC<props> = ({
  loginDetails,
  authDetails,
  showPopupMessageOnNavbar,
  logout,
}) => {
  const navigate = useNavigate();
  const [currentEdit, setCurrentEdit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [confirmNewEmail, setConfirmNewEmail] = useState("");
  const [newCellNumber, setNewCellNumber] = useState("");

  const [showVerificationPopup, setShowVerificationPopup] = useState(false);
  const [response, setResponse] = useState("");

  const emailButtonFunction = () => {
    if (!loginDetails?.emailVerified) {
      navigate("/account/verify");
    } else {
      setCurrentEdit("email");
    }
  };

  const triggerAccountModification = (e: any) => {
    e.preventDefault();
    if (currentEdit === "email") {
      const modifyUserAccountDto: ModifyUserAccountDto =
        new ModifyUserAccountDto(
          ModificationType.EMAIL,
          loginDetails.email,
          password,
          newEmail
        );
      processModification(modifyUserAccountDto);
    } else if (currentEdit === "names") {
      const modifyUserAccountDto: ModifyUserAccountDto =
        new ModifyUserAccountDto(
          ModificationType.EMAIL,
          loginDetails.email,
          password,
          newEmail
        );
      processModification(modifyUserAccountDto);
    } else {
      const modifyUserAccountDto: ModifyUserAccountDto =
        new ModifyUserAccountDto(
          ModificationType.CELL_NUMBER,
          loginDetails.email,
          password,
          "",
          newCellNumber
        );
      processModification(modifyUserAccountDto);
    }
  };

  const processModification = (modifyUserAccountDto: ModifyUserAccountDto) => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);
      updateUserAccount(
        authDetails.accessToken,
        loginDetails.id,
        modifyUserAccountDto
      )
        .then((response) => {
          setResponse(response.data.message);
          setShowVerificationPopup(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          if (error?.status === 401) {
            logout();
            showPopupMessageOnNavbar(error.response?.data?.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            showPopupMessageOnNavbar(
              `[${error.message}] Connection timed out.`
            );
          } else {
            showPopupMessageOnNavbar(
              error.response?.data?.errorMessage || "Unexpected error"
            );
          }
          setIsLoading(false);
        });
    } else {
      showPopupMessageOnNavbar("Please login to proceed.");
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showVerificationPopup) {
    //Navigate to verification page
    navigate("/account/update/verification", { state: response });
  }

  return (
    <div className="user-account">
      <div className="user-account-contents">
        {currentEdit === "names" ? (
          <div className="details-container">
            <h2>Updating Your Names</h2>
            <form
              className="editing-container"
              onSubmit={triggerAccountModification}>
              <p>Current First Name</p>
              <input value={loginDetails?.name} readOnly />
              <input
                type="text"
                placeholder="Enter your new first name"
                required
              />
              <br></br>
              <p>Current Last Name</p>
              <input value={loginDetails?.surname} readOnly />
              <input
                type="text"
                placeholder="Enter your new last name"
                required
              />
              <div className="row-buttons">
                <button className="grey" type="submit">
                  Update
                </button>
                <button
                  className="green"
                  onClick={() => setShowVerificationPopup(true)}>
                  Verify Code
                </button>
                <button className="cancel" onClick={() => setCurrentEdit("")}>
                  Cancel
                </button>
              </div>
            </form>
            <hr />
          </div>
        ) : (
          <div className="details-container">
            <h2>Full Name</h2>
            <div className="row">
              <p>{loginDetails?.name + " " + loginDetails?.surname}</p>
              <button onClick={() => setCurrentEdit("names")}>Edit</button>
            </div>
            <hr />
          </div>
        )}

        {currentEdit === "email" ? (
          <div className="details-container">
            <h2>Changing Email Address</h2>
            <form
              onSubmit={triggerAccountModification}
              className="editing-container">
              <p>Current Email Address</p>
              <input value={loginDetails?.email} readOnly />
              <input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                type="email"
                placeholder="Enter your new email address"
                required
              />
              <input
                value={confirmNewEmail}
                onChange={(e) => setConfirmNewEmail(e.target.value)}
                type="email"
                placeholder="Re-Enter your new email address"
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                required
              />
              <div className="row-buttons">
                <button className="grey" type="submit">
                  Change
                </button>
                <button
                  className="green"
                  onClick={() => setShowVerificationPopup(true)}>
                  Verify Code
                </button>
                <button className="cancel" onClick={() => setCurrentEdit("")}>
                  Cancel
                </button>
              </div>
            </form>
            <hr />
          </div>
        ) : (
          <div className="details-container">
            <h2>Email Address</h2>
            <div className="row">
              <p>{loginDetails?.email}</p>
              <button onClick={emailButtonFunction}>
                {!loginDetails?.emailVerified ? "Verify Email" : "Edit"}
              </button>
            </div>
            <hr />
          </div>
        )}

        {currentEdit === "cell" ? (
          <div className="details-container">
            <h2>Changing Cell Number</h2>
            <form
              onSubmit={triggerAccountModification}
              className="editing-container">
              <p>Current Cell Number</p>
              <input value={loginDetails?.cellNumber} readOnly />
              <input
                type="number"
                placeholder="Enter your new cell number"
                onChange={(e) => setNewCellNumber(e.target.value)}
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                required
              />
              <div className="row-buttons">
                <button className="grey" type="submit">
                  Change
                </button>
                <button
                  className="green"
                  onClick={() => setShowVerificationPopup(true)}>
                  Verify Code
                </button>
                <button className="cancel" onClick={() => setCurrentEdit("")}>
                  Cancel
                </button>
              </div>
            </form>
            <hr />
          </div>
        ) : (
          <div className="details-container">
            <h2>Cell Number</h2>
            <div className="row">
              <p>{loginDetails?.cellNumber}</p>
              <button onClick={() => setCurrentEdit("cell")}>Edit</button>
            </div>
            <hr />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
