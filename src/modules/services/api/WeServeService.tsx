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


const getProviders = (accessToken :string,pageSize: number, providerPageNo: number, occupationId:number) =>
  weServeAPI.get(`/we-serve/api/v2/service-providers?pageNo=${(providerPageNo-1)}&pageSize=${pageSize}&occupationId=${occupationId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const searchProviders = (accessToken :string, keyword :string, pageSize: number, pageNo: number, occupationId:number )=>
  weServeAPI.get(`/we-serve/api/v1/service-providers/search?keyword=${keyword}&pageNo=${(pageNo-1)}&pageSize=${pageSize}&occupationId=${occupationId}`,{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });


export { loginRequest, registrationRequest, getProviders,searchProviders };
