import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import "./navbar.css";
import SigninPopup from "../../../auth/pop_up/SigninPopup";
import { APIContext } from "../../../context/ContextProvider";
import LoadingScreenPopup from "../pop_up/progress_bar/LoadingScreenPopup";
import ErrorMessagePopup from "../pop_up/error_message/ErrorPopup";

const SIGN_IN = "sign-in";
const SIGN_UP = "sign-up";
const SIGN_OUT = "sign-out";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  //const [showPopUp, setShowPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState(SIGN_UP);
  const {
    authDetails,
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

  const toggleMenu = () => {};

  return (
    <>
      {showPopUp && (
        <SigninPopup
          popUpType={popUpType}
          setPopUpType={setPopUpType}
          setShowPopUp={setShowPopUp}
        />
      )}
      {isLoading && <LoadingScreenPopup />}
      {showErrorPopup && (
        <ErrorMessagePopup
          errorMessage={serverError}
          showErrorPopup={showErrorPopup}
          onClose={handleClosePopup}
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
              setCurrentPage("sign-n");
              if (authDetails != null) {
                setShowPopUp(true);
                setPopUpType(SIGN_OUT);
              } else {
                setShowPopUp(true);
                setPopUpType(SIGN_IN);
              }
            }}
            className="button"
          >
            {authDetails == null ? "Sign in" : "Sign out"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
