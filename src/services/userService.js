import axios from "axios";
import jwtDecode from "jwt-decode";
import { API } from "../config/config.json";

export const userLogin = async (user) => {
  const { data, headers } = await axios.post(API + `/auth/login`, user);
  if (data !== undefined && data.message !== "success") return data;
  return headers["x-auth-token"];
};
export const userLogout = async (user) => {
  try {
    localStorage.removeItem("token");
  } catch (err) {}
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (err) {}
};

export const userCheck = async (user) => {
  const { data } = await axios.post(API + `/auth/usercheck`, user);
  if (data !== undefined && data.message !== "success") return data;
};

export const ansCheck = async (user) => {
  const { data } = await axios.post(API + `/auth/anscheck`, user);
  if (data !== undefined && data.message !== "success") return data;
  return data;
};

export const resetPassword = async (id, pass) => {
  const { data } = await axios.patch(API + `/auth/resetpassword/${id}`, pass);
  if (data !== undefined && data.message !== "success") return data;
  return data;
};
