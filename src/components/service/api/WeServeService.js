import axios from "axios";

const weServeAPI = axios.create({
  baseURL: "http://localhost:8085",
});

const loginRequest = (loginDto) =>
  weServeAPI.post("/we-serve/auth/api/v1/accounts/user-login", loginDto);

export { loginRequest };
