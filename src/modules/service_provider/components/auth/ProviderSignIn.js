import { React, useContext, useState } from "react";
import "./providerSignIn.css";
import { APIContext } from "../../../context/ContextProvider";
import { ServiceProviderLoginDto } from "../../models/ServiceProviderLoginDto";
import { ServiceProviderRegistrationDto } from "../../models/ServiceProviderRegistrationDto";
import { useNavigate } from "react-router-dom";
import { OccupationsList } from "../../../../assets/assets";

const SIGN_IN = "signin";
const SIGN_UP = "signup";

const ProviderSignIn = ({ headerMessage, siginT, onSuccess }) => {
  const [siginType, setSignType] = useState(siginT || SIGN_IN);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [occupationId, setOccupationId] = useState(-1);
  const [experience, setExperience] = useState(0);

  const { providerLogin, providerRegister } = useContext(APIContext);

  const triggerLogin = (e) => {
    e.preventDefault();
    let loginDto = new ServiceProviderLoginDto(email, password);
    providerLogin(loginDto)
      .then(() => {
        if (onSuccess) {
          onSuccess();
        }
      })
      .catch();
  };

  const triggerRegistration = (e) => {
    e.preventDefault();
    if (occupationId === -1) {
      alert("Please select an occupation");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    let registrationDto = new ServiceProviderRegistrationDto(
      fullName,
      email,
      cellNumber,
      password,
      occupationId,
      experience
    );
    providerRegister(registrationDto)
      .then(() => onSuccess())
      .catch();
  };

  const triggerExecution = (e) => {
    if (siginType === SIGN_IN) {
      triggerLogin(e);
    } else {
      triggerRegistration(e);
    }
  };

  return (
    <>
      <form onSubmit={triggerExecution}>
        <div className="provider-signin-container">
          <h2>{headerMessage}</h2>
          <div className="provider-signin-contents">
            <div className="provider-signin-header">
              <p>
                {siginType === SIGN_IN
                  ? "Service Provider Login"
                  : "Service Provider Registration"}
              </p>
            </div>
            <div className="provider-signin-body">
              {siginType === SIGN_UP && (
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    value={fullName}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Cell Number"
                    onChange={(e) => {
                      setCellNumber(e.target.value);
                    }}
                    value={cellNumber}
                    required
                  />
                  <select
                    value={occupationId}
                    onChange={(e) => setOccupationId(parseInt(e.target.value))}
                    required
                  >
                    <option value={-1}>Select Occupation</option>
                    {OccupationsList.map((occupation) => (
                      <option key={occupation.id} value={occupation.id}>
                        {occupation.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    placeholder="Years of Experience"
                    min="0"
                    onChange={(e) => {
                      setExperience(parseInt(e.target.value));
                    }}
                    value={experience}
                    required
                  />
                </>
              )}
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
              {siginType === SIGN_UP && (
                <input
                  type="password"
                  placeholder="Confirm password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  value={confirmPassword}
                  required
                />
              )}

              <button type="submit">
                {siginType === SIGN_IN ? "Sign in" : "Create account"}
              </button>
            </div>
            <div className="provider-signin-bottom">
              <p>
                {siginType === SIGN_IN
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <span
                  className="provider-signin-span"
                  onClick={() => {
                    siginType === SIGN_IN
                      ? navigate("/provider/register")
                      : navigate("/provider/login");
                  }}
                >
                  {siginType === SIGN_IN
                    ? "Create account here"
                    : "Login here"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProviderSignIn;

