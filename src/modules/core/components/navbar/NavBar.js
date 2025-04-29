import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import "./navbar.css";
import SigninPopup from "../../../auth/pop_up/SigninPopup";
import { APIContext } from "../../../context/ContextProvider";
import LoadingScreen from "../pop_up/progress_bar/LoadingScreenPopup";
import ErrorMessagePopup from "../pop_up/error_message/ErrorPopup";

const SIGN_IN = "sign-in";
const SIGN_UP = "sign-up";
const SIGN_OUT = "sign-out";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  //const [showPopUp, setShowPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState(SIGN_UP);
  const {
    showPopUp,
    setShowPopUp,
    loginDetails,
    isLoading,
    showErrorPopup,
    setShowErrorPopup,
    serverError,
  } = useContext(APIContext);

  const handleClosePopup = () => {
    setShowErrorPopup(false);
  };

  return (
    <>
      <nav>
        {showPopUp && (
          <SigninPopup
            popUpType={popUpType}
            setPopUpType={setPopUpType}
            setShowPopUp={setShowPopUp}
          />
        )}
        {isLoading && <LoadingScreen />}
        {showErrorPopup && (
          <ErrorMessagePopup
            errorMessage={serverError}
            showErrorPopup={showErrorPopup}
            onClose={handleClosePopup}
          />
        )}
        <div className="navbar">
          <Link to="/">
            <img src={assets.weservename} alt="weservelogo" className="logo" />
          </Link>

          <ul className="navbar-list">
            <Link
              to="/"
              className={currentPage === "home" ? "active" : ""}
              onClick={() => {
                setCurrentPage("home");
              }}
            >
              Home
            </Link>
            <a
              href="#quick-start"
              className={currentPage === "quick-start" ? "active" : ""}
              onClick={() => {
                setCurrentPage("quick-start");
              }}
            >
              Quick Start
            </a>
            <Link
              to="/providers"
              className={currentPage === "providers" ? "active" : ""}
              onClick={() => {
                setCurrentPage("providers");
              }}
            >
              Providers
            </Link>
            <a
              href="#mobile-app"
              className={currentPage === "mobile-app" ? "active" : ""}
              onClick={() => {
                setCurrentPage("mobile-app");
              }}
            >
              Mobile App
            </a>
            <a
              href="#footer"
              className={currentPage === "contactus" ? "active" : ""}
              onClick={() => {
                setCurrentPage("contactus");
              }}
            >
              Contact Us
            </a>
          </ul>

          <div className="navbar-right">
            <div className="navbar-account-container">
              <Link to="/user-account">
                <img
                  onClick={() => {
                    setCurrentPage("user-account");
                  }}
                  src={assets.acccount_icon}
                  alt=""
                  className={
                    currentPage === "user-account"
                      ? "navbar-account-icon active-img"
                      : "navbar-account-icon"
                  }
                />
              </Link>
              {loginDetails != null ? <div className="dot"></div> : <></>}
            </div>
            <button
              onClick={() => {
                setCurrentPage("sign-n");
                if (loginDetails != null) {
                  setShowPopUp(true);
                  setPopUpType(SIGN_OUT);
                } else {
                  setShowPopUp(true);
                  setPopUpType(SIGN_IN);
                }
              }}
              className="button"
            >
              {loginDetails == null ? "Sign in" : "Sign out"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
