import React, { useContext, useState } from "react";
import "./signinPopup.css";
import { assets } from "../../../assets/assets";
import { APIContext } from "../../context/ContextProvider";
import { LoginDto } from "../../user/models/LoginDto";
const SIGN_IN = "sign-in";
const SIGN_UP = "sign-up";
const SIGN_OUT = "sign-out";

const SIGN_TYPES = {
  [SIGN_UP]: "Sign up",
  [SIGN_IN]: "Sign in",
  [SIGN_OUT]: "Sign out",
};

const Signin_popup = ({ setShowPopUp, popUpType, setPopUpType }) => {
  //Login hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout } = useContext(APIContext);

  //Trigger login request
  const triggerLogin = (e) => {
    //Prevent the page from reloading
    e.preventDefault();
    //Send a login request
    let loginDto = new LoginDto(email, password);
    login(loginDto);
  };

  //Trigger registration request
  const triggerRegistration = (e) => {
    e.preventDefault();
    console.log("Registration request");
  };

  //Trigger logout request
  const triggerLogout = (e) => {
    e.preventDefault();
    logout();
    console.log("Logged out");
  };

  //Returns the text displayed on the onSubmit button for the pop-up form based on the popupType
  const buttonText = (popUpType) => {
    if (popUpType === SIGN_UP) return "Create account";
    else if (popUpType === SIGN_IN) return "Sign in";
    else return "Sign out";
  };

  //Returns the method to be triggered based on the pop-up type
  const onSubmitFunction = (popUpType) => {
    if (popUpType === SIGN_UP) return triggerRegistration;
    else if (popUpType === SIGN_IN) return triggerLogin;
    else return triggerLogout;
  };

  //
  const bottomContent = () => {
    if (popUpType === SIGN_UP)
      return (
        <p>
          Already have an account?{" "}
          <span
            className="sign-in-span"
            onClick={() => {
              setPopUpType(SIGN_IN);
            }}
          >
            Sign in
          </span>
        </p>
      );
    else if (popUpType === SIGN_IN)
      return (
        <p>
          Don't have an account?
          <span
            className="sign-in-span"
            onClick={() => {
              setPopUpType(SIGN_UP);
            }}
          >
            Click here
          </span>
        </p>
      );
    else return <p>We hope to see you soon</p>;
  };

  return (
    <div className="sign-up">
      <div className="sign-up-contents">
        <div className="sign-header-contents">
          <h2>{SIGN_TYPES[popUpType]}</h2>
          <img
            className="close-sign-up-window"
            src={assets.close_window}
            alt=""
            onClick={() => setShowPopUp(false)}
          />
        </div>

        <form onSubmit={onSubmitFunction(popUpType)} className="sign-up-form">
          {popUpType === SIGN_UP ? (
            <>
              <div className="field-container">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                ></input>
              </div>

              <div className="field-container">
                <label>Surame</label>
                <input
                  type="text"
                  placeholder="Enter your surname"
                  required
                ></input>
              </div>
            </>
          ) : (
            <></>
          )}

          {popUpType !== SIGN_OUT ? (
            <div className="field-container">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
          ) : (
            <></>
          )}

          {popUpType === SIGN_UP ? (
            <div className="field-container">
              <label>Cell Number</label>
              <input
                type="number"
                placeholder="Enter your cell number"
                required
              ></input>
            </div>
          ) : (
            <></>
          )}

          {popUpType !== SIGN_OUT ? (
            <div className="field-container">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>
          ) : (
            <></>
          )}

          {popUpType === SIGN_UP ? (
            <div className="field-container">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-Enter your password"
              ></input>
            </div>
          ) : (
            <></>
          )}

          {popUpType === SIGN_UP ? (
            <div className="sign-in-condition-checkbox">
              <input type="checkbox" />
              <p>I agree to the terms of use & privacy policy</p>
            </div>
          ) : (
            <></>
          )}

          <button type="submit">{buttonText(popUpType)}</button>

          {bottomContent()}
        </form>
      </div>
    </div>
  );
};

export default Signin_popup;
