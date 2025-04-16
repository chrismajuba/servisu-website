import { createContext, useEffect, useState } from "react";
import { loginRequest } from "../service/api/WeServeService";

export const APIContext = createContext(null);

export const ContextProvider = (props) => {
  const [loginDetails, setLoginDetails] = useState(null);

  //Login Method
  const login = (loginDto) =>
    loginRequest(loginDto)
      .then((loginResponseDto) =>
        console.log(setLoginDetails(loginResponseDto.data))
      )
      .catch((error) => console.log(error));

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("/providers.json").then((Response) => {
      Response.json().then((data) => {
        console.log(data);
        setProviders(data);
      });
    });
  }, []);

  const contextValue = {
    loginDetails,
    providers,
    login,
  };

  return (
    <APIContext.Provider value={contextValue}>
      {props.children}
    </APIContext.Provider>
  );
};
