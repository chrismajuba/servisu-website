import axios from "axios";
const servisuAPI = axios.create({
  baseURL: "https://we-serve-api.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const requestAdminToDeleteUserAccount = (
  email: string) =>
  servisuAPI.delete(`/servisu/api/v1/users/delete-account/${email}`);

const requestAdminToDeleteProviderAccount = (email: string) =>
  servisuAPI.put(`/servisu/api/v1/service-providers/delete-account/${email}`);

export {
  requestAdminToDeleteUserAccount,
  requestAdminToDeleteProviderAccount,
};
