import axios from "axios";
import { LoginDto } from "../../user/models/LoginDto";
import { UserRegistrationDto } from "../../user/models/UserRegistrationDto";
import { RequestProviderDto } from "../../providers/models/RequestProviderDto";
import { VerificationDto } from "../../auth/models/VerificationDto";
import { ModifyUserAccountDto } from "../../user/models/ModifyUserAccountDto";
import { ServiceProviderLoginDto } from "../../service_provider/models/ServiceProviderLoginDto";
import { ServiceProviderRegistrationDto } from "../../service_provider/models/ServiceProviderRegistrationDto";
import { ModifyServiceProviderDto } from "../../service_provider/models/ModifyServiceProviderDto";

const servisuAPI = axios.create({
  baseURL: "https://we-serve-api.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const loginRequest = (loginDto: LoginDto) =>
  servisuAPI.post("/servisu/auth/api/v1/accounts/login", loginDto);

const getUserAccount = (accessToken: string) =>
  servisuAPI.get("/servisu/api/v1/users/my-account", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const registrationRequest = (
  userRegistrationResponseDto: UserRegistrationDto
) => servisuAPI.post("/servisu/api/v1/users", userRegistrationResponseDto);

const getProviders = (
  accessToken: string,
  pageSize: number,
  providerPageNo: number,
  occupationId: number
) =>
  servisuAPI.get(
    `/servisu/api/v1/service-providers?pageNo=${
      providerPageNo - 1
    }&pageSize=${pageSize}&occupationId=${occupationId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

const searchProviders = (
  accessToken: string,
  keyword: string,
  pageSize: number,
  pageNo: number,
  occupationId: number
) =>
  servisuAPI.get(
    `/servisu/api/v1/service-providers/search?keyword=${keyword}&pageNo=${
      pageNo - 1
    }&pageSize=${pageSize}&occupationId=${occupationId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

const getProvider = (accessToken: string, provider_id: number) =>
  servisuAPI.get(`/servisu/api/v1/service-providers/${provider_id}/view`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const requestService = (
  accessToken: string,
  requestProvider: RequestProviderDto
) =>
  servisuAPI.post(
    `/servisu/api/v1/event-monitor/request-service`,
    requestProvider,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

const getVerificationCode = (
  accessToken: string,
  email: string,
  accountType: string
) =>
  servisuAPI.get(`/servisu/api/v1/users/verify?email=${email}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const getUpdate = (accessToken: string, client_id: number) =>
  servisuAPI.get(`/servisu/api/v1/event-monitor/check-status/${client_id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const submitVerificationCode = (
  accessToken: string,
  verificationDto: VerificationDto
) =>
  servisuAPI.post(`/servisu/api/v1/users/verify`, verificationDto, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const updateUserAccount = (
  accessToken: string,
  userId: number,
  modifyAccountDto: ModifyUserAccountDto
) =>
  servisuAPI.put(`/servisu/api/v1/users/${userId}`, modifyAccountDto, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

// Service Provider API endpoints
const serviceProviderLoginRequest = (loginDto: ServiceProviderLoginDto) =>
  servisuAPI.post("/servisu/auth/api/v1/accounts/login", loginDto);

const getServiceProviderAccount = (accessToken: string) =>
  servisuAPI.get("/servisu/api/v1/service-providers/my-account", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const serviceProviderRegistrationRequest = (
  registrationDto: ServiceProviderRegistrationDto
) =>
  servisuAPI.post(
    "/servisu/api/v1/service-providers",
    registrationDto
  );

const updateServiceProviderAccount = (
  accessToken: string,
  providerId: number,
  modifyProviderDto: ModifyServiceProviderDto
) =>
  servisuAPI.put(
    `/servisu/api/v1/service-providers/${providerId}`,
    modifyProviderDto,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

const getServiceProviderRequests = (accessToken: string) =>
  servisuAPI.get("/servisu/api/v1/service-providers/requests", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const acceptServiceRequest = (accessToken: string, requestId: number) =>
  servisuAPI.post(
    `/servisu/api/v1/service-providers/requests/${requestId}/accept`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

const rejectServiceRequest = (accessToken: string, requestId: number) =>
  servisuAPI.post(
    `/servisu/api/v1/service-providers/requests/${requestId}/reject`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const requestAdminToDeleteUserAccount = (
    email: string) =>
    servisuAPI.delete(`/servisu/api/v1/users/delete-account/${email}`);

  const requestAdminToDeleteProviderAccount = (email: string) =>
    servisuAPI.put(`/servisu/api/v1/service-providers/delete-account/${email}`);

const updateServiceProviderAvailability = (
  accessToken: string,
  availability: string
) =>
  servisuAPI.put(
    "/servisu/api/v1/service-providers/availability",
    { availableWorkDays: availability },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

export {
  loginRequest,
  getUserAccount,
  registrationRequest,
  getProviders,
  searchProviders,
  getProvider,
  requestService,
  getUpdate,
  getVerificationCode,
  submitVerificationCode,
  updateUserAccount,
  serviceProviderLoginRequest,
  getServiceProviderAccount,
  serviceProviderRegistrationRequest,
  updateServiceProviderAccount,
  getServiceProviderRequests,
  acceptServiceRequest,
  rejectServiceRequest,
  updateServiceProviderAvailability,
  requestAdminToDeleteUserAccount,
  requestAdminToDeleteProviderAccount,
};
