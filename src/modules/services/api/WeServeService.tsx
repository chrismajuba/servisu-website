import axios from "axios";
import { DeleteAccountRequestDto } from "../../auth/models/DeleteAccountRequestDto";
import { VerificationDto } from "../../auth/models/VerificationDto";

const servisuAPI = axios.create({
  baseURL: "https://we-serve-api.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const requestUserAccountDeletion = (email: string) =>
  servisuAPI.post(
    "/servisu/api/v1/users/account/delete-account",
    new DeleteAccountRequestDto(email)
  );

const confirmUserAccountDeletion = (email: string, verificationCode: string) =>
  servisuAPI.post(
    "/servisu/api/v1/users/account/delete-account/confirm",
    new VerificationDto(email, verificationCode)
  );

const requestProviderAccountDeletion = (email: string) =>
  servisuAPI.post(
    "/servisu/api/v1/service-providers/account/delete-account",
    new DeleteAccountRequestDto(email)
  );

const confirmProviderAccountDeletion = (
  email: string,
  verificationCode: string
) =>
  servisuAPI.post(
    "/servisu/api/v1/service-providers/account/delete-account/confirm",
    new VerificationDto(email, verificationCode)
  );

export {
  requestUserAccountDeletion,
  confirmUserAccountDeletion,
  requestProviderAccountDeletion,
  confirmProviderAccountDeletion,
};
