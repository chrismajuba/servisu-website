import "./providerSecurity.css";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceProviderDetails } from "../../models/ServiceProviderDetails";
import { AuthDetails } from "../../../auth/models/AuthDetails";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import { APIContext } from "../../../context/ContextProvider";

interface Props {
  authDetails: AuthDetails;
  providerDetails: ServiceProviderDetails;
  showPopupMessageOnNavbar: Function;
  logout: Function;
}

const ProviderSecurity: React.FC<Props> = ({
  authDetails,
  providerDetails,
  showPopupMessageOnNavbar,
  logout,
}) => {
  const navigate = useNavigate();
  const [currentEdit, setCurrentEdit] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);

  const processModification = () => {
    if (authDetails != null && authDetails.authenticated) {
      setIsLoading(true);
      // TODO: Implement API call to update password
      setTimeout(() => {
        setIsLoading(false);
        setCurrentEdit("");
        showPopupMessageOnNavbar("Password updated successfully");
      }, 1000);
    } else {
      showPopupMessageOnNavbar("Please login to proceed.");
    }
  };

  const triggerSubmission = (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      showPopupMessageOnNavbar("New passwords do not match");
      return;
    }
    if (currentEdit === "password") {
      processModification();
    }
  };

  if (providerDetails === null) {
    return (
      <div className="provider-security-details">
        <p>Unavailable</p>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="provider-security-details">
      <div className="provider-security-details-content">
        {currentEdit === "password" ? (
          <div className="details-container">
            <h2>Changing Password</h2>
            <form onSubmit={triggerSubmission} className="editing-container">
              <input
                type="password"
                placeholder="Enter your current password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="RE-enter your new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
              <div className="row-buttons">
                <button type="submit" className="grey">
                  Change
                </button>
                <button
                  onClick={() => setCurrentEdit("")}
                  className="cancel"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
            <hr />
          </div>
        ) : (
          <div className="settings-container">
            <h2>Password</h2>
            <div className="row">
              <p>Change your password</p>
              <button onClick={() => setCurrentEdit("password")}>Edit</button>
            </div>
            <hr />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderSecurity;

