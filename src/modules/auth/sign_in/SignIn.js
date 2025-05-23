import { React, useContext, useState } from "react";
import "./signin.css";
import { APIContext } from "../../context/ContextProvider";
import { LoginDto } from "../../user/models/LoginDto";
import { UserRegistrationDto } from "../../user/models/UserRegistrationDto";
import { registrationRequest } from "../../services/api/WeServeService";
import { useNavigate } from "react-router-dom";

const SIGN_IN = "signin";
const SIGN_UP = "signup";

const SignIn = ({ headerMessage }) => {
  const [siginType, setSignType] = useState(SIGN_IN);
  const [_name, setName] = useState("");
  const [_surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const {
    login,
    showPopupMessageOnNavbar,
    showSuccessfulPopupMessageOnNavbar,
  } = useContext(APIContext);

  const triggerLogin = (e) => {
    let loginDto = new LoginDto(email, password);
    login(loginDto);
  };

  const triggerRegistration = () => {
    let userRegistrationtDto = new UserRegistrationDto();
    userRegistrationtDto.name = _name;
    userRegistrationtDto.surname = _surname;
    userRegistrationtDto.email = email;
    userRegistrationtDto.password = password;
    userRegistrationtDto.cellNumber = cellNumber;
    register(userRegistrationtDto);
  };

  const register = (userRegistrationtDto) => {
    setIsloading(true);
    registrationRequest(userRegistrationtDto)
      .then((response) => {
        showSuccessfulPopupMessageOnNavbar("Success", response.data.response);
        setSignType(SIGN_IN);
        setIsloading(false);
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          showPopupMessageOnNavbar(
            `[${error.message}] Server might be down. Please try again later`
          );
        } else if (error.code === "ECONNABORTED") {
          showPopupMessageOnNavbar(`[${error.message}] Connection timed out.`);
        } else {
          showPopupMessageOnNavbar(error.response.data.errorMessage);
        }
        setIsloading(false);
      });
  };

  const triggerExecution = (e) => {
    //Prevent the page from reloading
    e.preventDefault();
    if (siginType === SIGN_IN) {
      triggerLogin();
    } else {
      triggerRegistration();
    }
  };

  return (
    <>
      <form onSubmit={triggerExecution}>
        <div className="signin-container">
          <h2>{headerMessage}</h2>
          <div className="signin-contents">
            <div className="signin-header">
              <p>{siginType === SIGN_IN ? "Please login" : "Create account"}</p>
            </div>
            <div className="signin-body">
              {siginType === SIGN_UP && (
                <div className="multi-fields">
                  <input
                    type="text"
                    placeholder="First name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={_name}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                    value={_surname}
                    required
                  />
                </div>
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
              {siginType === SIGN_UP && (
                <input
                  type="number"
                  placeholder="Cell Number"
                  onChange={(e) => {
                    setCellNumber(e.target.value);
                  }}
                  value={cellNumber}
                  required
                />
              )}

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
                    setConfirmpassword(e.target.value);
                  }}
                  value={confirmpassword}
                  required
                />
              )}

              <button type="submit">
                {siginType === SIGN_IN ? "Sign in" : "Create account"}
              </button>
            </div>
            <div className="signin-bottom">
              <p>
                {siginType === SIGN_IN
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <span
                  className="signin-span"
                  onClick={() => {
                    siginType === SIGN_IN
                      ? setSignType(SIGN_UP)
                      : setSignType(SIGN_IN);
                  }}
                >
                  {siginType === SIGN_IN ? "Create account here" : "Login here"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
