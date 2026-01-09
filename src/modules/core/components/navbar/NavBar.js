import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import "./navbar.css";
import SigninPopup from "../../../auth/pop_up/SigninPopup";
import { APIContext } from "../../../context/ContextProvider";
import LoadingScreenPopup from "../pop_up/progress_bar/LoadingScreenPopup";
import MessagePopup from "../pop_up/Popup";
import { ROUTES } from "../../../../config/routes";

const SIGN_IN = "sign-in";
const SIGN_UP = "sign-up";
const SIGN_OUT = "sign-out";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [popUpType, setPopUpType] = useState(SIGN_UP);
  const [showSignInDropdown, setShowSignInDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const {
    showSignInPopUp,
    setShowSignInPopUp,
    loginDetails,
    providerDetails,
    userType,
    logout,
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSignInDropdown(false);
      }
    };

    if (showSignInDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSignInDropdown]);

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
              to={ROUTES.HOME}
              className={currentPage === "home" ? "active" : ""}
              onClick={() => {
                setCurrentPage("home");
              }}>
              Home
            </Link>
            <Link
              to={ROUTES.GET_STARTED}
              className={currentPage === "get-started" ? "active" : ""}
              onClick={() => {
                setCurrentPage("get-started");
              }}>
              Get Started
            </Link>
            {/* {userType === "user" && (
              <Link
                to="/providers"
                className={currentPage === "providers" ? "active" : ""}
                onClick={() => {
                  setCurrentPage("providers");
                }}>
                Browse Services
                <span className="nav-badge user-badge">For Users</span>
              </Link>
            )}
            {userType === "provider" && (
              <Link
                to="/providers"
                className={currentPage === "providers" ? "active" : ""}
                onClick={() => {
                  setCurrentPage("providers");
                }}>
                View Competitors
                <span className="nav-badge provider-badge">Provider</span>
              </Link>
            )}
            {!userType && (
              <Link
                to="/providers"
                className={currentPage === "providers" ? "active" : ""}
                onClick={() => {
                  setCurrentPage("providers");
                }}>
                Browse Services
              </Link>
            )} */}
            <a
              href="#footer"
              className={currentPage === "contactus" ? "active" : ""}
              onClick={() => {
                setCurrentPage("contactus");
              }}>
              Contact Us
            </a>
          </ul>
        </div>
        {/*<div className="navbar-right">
          {/* User-specific features 
          {userType === "user" && (
            <>
              <Link
                to="/account/my-requests"
                className={`nav-action-link ${currentPage === "my-requests" ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage("my-requests");
                }}>
                <span className="action-text">My Requests</span>
                <span className="user-indicator">User</span>
              </Link>
              <Link
                to="/account"
                className="navbar-account-container"
                onClick={() => {
                  setCurrentPage("user-account");
                }}>
                <img
                  src={assets.acccount_icon}
                  alt="User Account"
                  className={
                    currentPage === "user-account"
                      ? "navbar-account-icon active-img"
                      : "navbar-account-icon"
                  }
                />
                {(loginDetails != null) ? <div className="dot"></div> : <></>}
              </Link>
            </>
          )}

          {/* Provider-specific features
          {userType === "provider" && (
            <>
              <Link
                to="/provider/account"
                className={`nav-action-link ${currentPage === "provider-account" ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage("provider-account");
                }}>
                <span className="action-icon">💼</span>
                <span className="action-text">Dashboard</span>
                <span className="provider-indicator">Provider</span>
              </Link>
              <Link
                to="/provider/account"
                className="navbar-account-container"
                onClick={() => {
                  setCurrentPage("provider-account");
                }}>
                <img
                  src={assets.acccount_icon}
                  alt="Provider Account"
                  className={
                    currentPage === "provider-account"
                      ? "navbar-account-icon active-img"
                      : "navbar-account-icon"
                  }
                />
                {(providerDetails != null) ? <div className="dot"></div> : <></>}
              </Link>
            </>
          )}*/}

          {/* Authentication buttons for non-logged in users
          {!loginDetails && !providerDetails && (
            <div className="auth-buttons-group">
              <div className="signin-dropdown-container" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowSignInDropdown(!showSignInDropdown);
                  }}
                  className="button button-secondary">
                  <span>Sign In</span>
                  <span className={`dropdown-arrow ${showSignInDropdown ? "rotated" : ""}`}>▼</span>
                </button>
                {showSignInDropdown && (
                  <div className="signin-dropdown" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowSignInDropdown(false);
                        // Small delay to ensure dropdown closes smoothly
                        setTimeout(() => {
                          setShowSignInPopUp(true);
                          setPopUpType(SIGN_IN);
                        }, 100);
                      }}
                      className="dropdown-option">
                      <span className="option-icon">👤</span>
                      <div className="option-content">
                        <span className="option-title">Sign in as User</span>
                        <span className="option-description">Access your user account</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowSignInDropdown(false);
                        // Small delay to ensure dropdown closes smoothly
                        setTimeout(() => {
                          navigate("/provider/login");
                        }, 100);
                      }}
                      className="dropdown-option">
                      <span className="option-icon">💼</span>
                      <div className="option-content">
                        <span className="option-title">Sign in as Provider</span>
                        <span className="option-description">Access your provider dashboard</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>
              <div className="button-divider">or</div>
              <div className="button-group">
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="button button-primary">
                  <span>Join as User</span>
                </button>
                <button
                  onClick={() => {
                    navigate("/provider/register");
                  }}
                  className="button button-provider">
                  <span>Join as Provider</span>
                </button>
              </div>
            </div>
          )}*/}

          {/* Logout button for logged in users */}
          {/*{(loginDetails != null || providerDetails != null) && (
            <button
              onClick={() => {
                logout();
                navigate("/home");
              }}
              className="button button-logout">
              <span>Sign Out</span>
            </button>
          )}
        </div> */}
      </nav>
    </>
  );
};

export default NavBar;
