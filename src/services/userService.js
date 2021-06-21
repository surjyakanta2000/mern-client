import axios from "axios";
import jwtDecode from "jwt-decode";
import { API } from "../config/config.json";

export const userLogin = async (user) => {
  const { headers } = await axios.post(API + `/auth/login`, user);
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
