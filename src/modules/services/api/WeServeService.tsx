import axios from "axios";
import { LoginDto } from "../../user/models/LoginDto";
import {UserRegistrationDto} from "../../user/models/UserRegistrationDto";
import { RequestProviderDto } from "../../providers/models/RequestProviderDto";
import { VerificationDto } from "../../auth/models/VerificationDto";

const weServeAPI = axios.create({
  baseURL: "https://localhost:8443",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
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

  const getProvider = (accessToken :string,provider_id: number) =>
    weServeAPI.get(`/we-serve/api/v1/service-providers/${provider_id}/view`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

  const requestService = (accessToken: string, requestProvider: RequestProviderDto) => weServeAPI.post(`/we-serve/api/v1/event-monitor/request-service`,requestProvider,{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  } )

  const getVerificationCode = (accessToken:string,email:string, accountType:string) => 
    weServeAPI.get(`/we-serve/auth/api/v1/accounts/verify?email=${email}&accountType=${accountType}`,{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },})

  const getUpdate = (accessToken:string, client_id:number) => weServeAPI.get(`/we-serve/api/v1/event-monitor/check-status/${client_id}`,{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },})

    const submitVerificationCode = (accessToken:string,verificationDto:VerificationDto, accountType:string) => 
      weServeAPI.post(`/we-serve/auth/api/v1/accounts/verify?accountType=${accountType}`,verificationDto,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },})

export { loginRequest, registrationRequest, getProviders,searchProviders,getProvider,requestService,getUpdate,getVerificationCode, submitVerificationCode };
