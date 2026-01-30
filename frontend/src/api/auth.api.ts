import api from "./axios";

export const registerUser = (data: {
  email: string;
  password: string;
}) => api.post("/auth/register", data);

export const loginUser = (data: {
  email: string;
  password: string;
}) => api.post("/auth/login", data);
