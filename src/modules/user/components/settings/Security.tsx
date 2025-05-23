import "./security.css";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { ModificationType } from "../../models/ModificationType";
import { ModifyUserAccountDto } from "../../models/ModifyUserAccountDto";
import { LoginDetails } from "../../models/LoginDetails";
import { AuthDetails } from "../../../auth/models/AuthDetails";
import { updateUserAccount } from "../../../services/api/WeServeService";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";

interface props{
  authDetails: AuthDetails,
  loginDetails: LoginDetails
  showPopupMessageOnNavbar: Function,
  logout: Function,
}

const SecuritySettings: React.FC<props> = ({
  authDetails,
  loginDetails,
  showPopupMessageOnNavbar,
  logout
}) => {
  const navigate = useNavigate();
  const [currentEdit, setCurrentEdit] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showVerificationPopup, setShowVerificationPopup] = useState(false)


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

  const triggerSubmission = (e:any) => {
    e.preventDefault();
    if (currentEdit === "password") {
      console.log("change of password");
      const modifyUserAccountDto: ModifyUserAccountDto = new ModifyUserAccountDto();
      modifyUserAccountDto.modificationType = ModificationType.PASSWORD
      modifyUserAccountDto.email = loginDetails.email;
      modifyUserAccountDto.password = password;
      modifyUserAccountDto.newPassword = newPassword;
      processModification(modifyUserAccountDto);

    }else if (currentEdit === "two-step") {
      console.log("change of two-step");
    }
  };

  if (loginDetails === null) {
    return (
      <div className="security-details">
        <p>Unavailable</p>
      </div>
    );
  }

  if(isLoading){
    return <LoadingScreen/>
  }

  if (showVerificationPopup) {
    //Navigate to verification page
    navigate("/account/update/verification", { state: response });
  }


  return (
    <div className="security-details">
      <div className="security-details-content">
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
                required
              />
              <div className="row-buttons">
                <button type="submit" className="grey">
                  Change
                </button>
                <button onClick={() => setCurrentEdit("")} className="cancel">
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

        {currentEdit === "two-step" ? (
          <div className="details-container">
            <h2>Enabling Two-Step Verification</h2>
            <form onSubmit={triggerSubmission} className="editing-container">
              <br />
              <div className="row-buttons">
                <button type="submit" className="grey">
                  Enable
                </button>
                <button onClick={() => setCurrentEdit("")} className="cancel">
                  Cancel
                </button>
              </div>
            </form>
            <hr />
          </div>
        ) : (
          <div className="settings-container">
            <h2>Two-Step Verification</h2>
            <div className="row">
              <p>Enable Two-Step Verification for more security</p>
              <button onClick={() => setCurrentEdit("two-step")}>Enable</button>
            </div>
            <hr />
          </div>
        )}
      </div>
    </div>
  );
};

export default SecuritySettings;
