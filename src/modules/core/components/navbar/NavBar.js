import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import "./navbar.css";
import SigninPopup from "../../../auth/pop_up/SigninPopup";
import { APIContext } from "../../../context/ContextProvider";
import LoadingScreenPopup from "../pop_up/progress_bar/LoadingScreenPopup";
import MessagePopup from "../pop_up/Popup";

const SIGN_IN = "sign-in";
const SIGN_UP = "sign-up";
const SIGN_OUT = "sign-out";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [popUpType, setPopUpType] = useState(SIGN_UP);
  const {
    showSignInPopUp,
    setShowSignInPopUp,
    loginDetails,
    isLoading,
    showErrorPopup,
    setShowErrorPopup,
    serverError,
    showSuccessfulPopup,
    popHeaderMessage,
    successfulPopupMessage,
    setShowSuccessfulPopup,
  } = useContext(APIContext);

  const handleClosePopup = () => {
    setShowErrorPopup(false);
  };

  const handleCloseSuccessfulPopup = () => {
    setShowSuccessfulPopup(false);
  };

  const toggleMenu = () => {};

  return (
    <>
      {showSignInPopUp && (
        <SigninPopup
          popUpType={popUpType}
          setPopUpType={setPopUpType}
          setShowPopUp={setShowSignInPopUp}
        />
      )}
      {isLoading && <LoadingScreenPopup />}
      {showErrorPopup && (
        <MessagePopup
          message={serverError}
          showPopup={showErrorPopup}
          onClose={handleClosePopup}
        />
      )}
      {showSuccessfulPopup && (
        <MessagePopup
          popHeaderMessage={popHeaderMessage}
          message={successfulPopupMessage}
          showPopup={showSuccessfulPopup}
          onClose={handleCloseSuccessfulPopup}
        />
      )}
      <nav className="navbar">
        <div className="navbar-left">
          <div>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <Link to="/">
              <img
                src={assets.weservename}
                alt="weservelogo"
                className="logo"
              />
            </Link>
          </div>
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
              href="#footer"
              className={currentPage === "contactus" ? "active" : ""}
              onClick={() => {
                setCurrentPage("contactus");
              }}
            >
              Contact Us
            </a>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="my-request">
            <Link
              to="/account/my-requests"
              className={currentPage === "my-requests" ? "active" : ""}
              onClick={() => {
                setCurrentPage("my-requests");
              }}
            >
              My Requests
            </Link>
          </div>
          <div className="navbar-account-container">
            <Link to="/account">
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
              setCurrentPage("sign-in");
              if (loginDetails != null) {
                setShowSignInPopUp(true);
                setPopUpType(SIGN_OUT);
              } else {
                setShowSignInPopUp(true);
                setPopUpType(SIGN_IN);
              }
            }}
            className="button"
          >
            {loginDetails == null ? "Sign in" : "Sign out"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
