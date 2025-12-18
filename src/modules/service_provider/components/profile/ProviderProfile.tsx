import React, { useState } from "react";
import "./providerProfile.css";
import { ServiceProviderDetails } from "../../models/ServiceProviderDetails";
import { AuthDetails } from "../../../auth/models/AuthDetails";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";

interface Props {
  providerDetails: ServiceProviderDetails;
  authDetails: AuthDetails;
  showPopupMessageOnNavbar: Function;
  logout: Function;
}

const ProviderProfile: React.FC<Props> = ({
  providerDetails,
  authDetails,
  showPopupMessageOnNavbar,
  logout,
}) => {
  const [currentEdit, setCurrentEdit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState(providerDetails?.fullName || "");
  const [cellNumber, setCellNumber] = useState(providerDetails?.cellNumber || "");
  const [experience, setExperience] = useState(providerDetails?.experience || 0);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const handleSave = (field: string) => {
    // TODO: Implement API call to update provider profile
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentEdit("");
      showPopupMessageOnNavbar(`${field} updated successfully`);
    }, 1000);
  };

  return (
    <div className="provider-profile">
      <div className="provider-profile-contents">
        <div className="details-container">
          <h2>Full Name</h2>
          <div className="row">
            <p>{providerDetails?.fullName}</p>
            <button onClick={() => setCurrentEdit("fullName")}>Edit</button>
          </div>
          {currentEdit === "fullName" && (
            <div className="editing-container">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
              />
              <div className="row-buttons">
                <button className="grey" onClick={() => handleSave("Full Name")}>
                  Save
                </button>
                <button className="cancel" onClick={() => setCurrentEdit("")}>
                  Cancel
                </button>
              </div>
            </div>
          )}
          <hr />
        </div>

        <div className="details-container">
          <h2>Email Address</h2>
          <div className="row">
            <p>
              {providerDetails?.email}
              {!providerDetails?.emailVerified && (
                <span style={{ color: "red", marginLeft: "10px" }}>
                  (Unverified)
                </span>
              )}
            </p>
            {!providerDetails?.emailVerified && (
              <button className="green">Verify Email</button>
            )}
          </div>
          <hr />
        </div>

        <div className="details-container">
          <h2>Cell Number</h2>
          <div className="row">
            <p>{providerDetails?.cellNumber}</p>
            <button onClick={() => setCurrentEdit("cellNumber")}>Edit</button>
          </div>
          {currentEdit === "cellNumber" && (
            <div className="editing-container">
              <input
                type="text"
                value={cellNumber}
                onChange={(e) => setCellNumber(e.target.value)}
                placeholder="Enter your cell number"
              />
              <div className="row-buttons">
                <button className="grey" onClick={() => handleSave("Cell Number")}>
                  Save
                </button>
                <button className="cancel" onClick={() => setCurrentEdit("")}>
                  Cancel
                </button>
              </div>
            </div>
          )}
          <hr />
        </div>

        <div className="details-container">
          <h2>Occupation</h2>
          <div className="row">
            <p>{providerDetails?.occupation?.name || "Not set"}</p>
            <button onClick={() => setCurrentEdit("occupation")}>Edit</button>
          </div>
          {currentEdit === "occupation" && (
            <div className="editing-container">
              <select>
                <option>Select Occupation</option>
                {/* TODO: Populate from API */}
              </select>
              <div className="row-buttons">
                <button className="grey" onClick={() => handleSave("Occupation")}>
                  Save
                </button>
                <button className="cancel" onClick={() => setCurrentEdit("")}>
                  Cancel
                </button>
              </div>
            </div>
          )}
          <hr />
        </div>

        <div className="details-container">
          <h2>Experience</h2>
          <div className="row">
            <p>{providerDetails?.experience} years</p>
            <button onClick={() => setCurrentEdit("experience")}>Edit</button>
          </div>
          {currentEdit === "experience" && (
            <div className="editing-container">
              <input
                type="number"
                value={experience}
                onChange={(e) => setExperience(parseInt(e.target.value))}
                placeholder="Enter years of experience"
                min="0"
              />
              <div className="row-buttons">
                <button className="grey" onClick={() => handleSave("Experience")}>
                  Save
                </button>
                <button className="cancel" onClick={() => setCurrentEdit("")}>
                  Cancel
                </button>
              </div>
            </div>
          )}
          <hr />
        </div>

        <div className="details-container">
          <h2>Rating</h2>
          <div className="row">
            <p>
              {providerDetails?.rating?.toFixed(1) || "0.0"} / 5.0 (
              {providerDetails?.calls || 0} service calls)
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;

