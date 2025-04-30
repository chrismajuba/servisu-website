import axios from "axios";
import { LoginDto } from "../../user/models/LoginDto";
import {UserRegistrationDto} from "../../user/models/UserRegistrationDto";

const weServeAPI = axios.create({
  baseURL: "http://localhost:8085",
});

const loginRequest = (loginDto : LoginDto) =>
  weServeAPI.post("/we-serve/auth/api/v1/accounts/user-login", loginDto);

const registrationRequest = (userRegistrationResponseDto : UserRegistrationDto) =>
  weServeAPI.post("/we-serve/api/v1/users", userRegistrationResponseDto);


const getProviders = (accessToken :string, providerPageNo: number, occupationId:number) =>
  weServeAPI.get(`/we-serve/api/v2/service-providers?pageNo=${providerPageNo}&pageSize=5&occupationId=${occupationId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export { loginRequest, registrationRequest, getProviders };
