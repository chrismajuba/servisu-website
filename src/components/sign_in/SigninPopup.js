import React, { useContext, useState } from "react";
import "./signinPopup.css";
import { assets } from "../../assets/assets";
import { APIContext } from "../context/ContextProvider";

const SIGN_IN = "sign-ip";
const SIGN_UP = "sign-up";

const Signin_popup = ({ setIsSignIn, signInType, setSignInType }) => {
  //Login hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(APIContext);

  //Trigger login request
  const triggerLogin = (e) => {
    //Prevent the page from reloading
    e.preventDefault();

    //Send a login request
    login({ email: email, password: password });

    setEmail("");
    setPassword("");
  };

  //Trigger registration request
  const triggerRegistration = (e) => {
    e.preventDefault();
    console.log("Registration request");
  };

  return (
    <div className="sign-up">
      <div className="sign-up-contents">
        <div className="sign-header-contents">
          <h2>{signInType === SIGN_UP ? "Sign up" : "Sign in"}</h2>
          <img
            className="close-sign-up-window"
            src={assets.close_window}
            alt=""
            onClick={() => setIsSignIn(false)}
          />
        </div>

        <form
          onSubmit={signInType === SIGN_UP ? triggerRegistration : triggerLogin}
          className="sign-up-form"
        >
          {signInType === SIGN_UP ? (
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

          {signInType === SIGN_UP ? (
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

          {signInType === SIGN_UP ? (
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

          {signInType === SIGN_UP ? (
            <div className="sign-in-condition-checkbox">
              <input type="checkbox" />
              <p>I agree to the terms of use & privacy policy</p>
            </div>
          ) : (
            <></>
          )}

          <button type="submit">
            {signInType === SIGN_UP ? "Create account" : "Sign in"}
          </button>

          {signInType === SIGN_UP ? (
            <p>
              Already have an account?{" "}
              <span
                className="sign-in-span"
                onClick={() => {
                  setSignInType(SIGN_IN);
                }}
              >
                Sign in
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?
              <span
                className="sign-in-span"
                onClick={() => {
                  setSignInType(SIGN_UP);
                }}
              >
                Click here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signin_popup;
