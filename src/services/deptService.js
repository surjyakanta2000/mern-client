import axios from "axios";
import { API } from "../config/config.json";

export const getDept = async () => {
  const { data } = await axios.get(API + `/dept/all`);
  return data;
};
export const getSpecDept = async (id) => {
  const { data } = await axios.get(API + `/dept/${id}`);
  return data;
};
export const addDept = async (newDept) => {
  const { data } = await axios.post(API + `/dept/add`, newDept);
  if (data !== undefined && data.message !== "success") return data;
};
export const updateDept = async (id, dept) => {
  const { data } = await axios.put(API + `/dept/update/${id}`, dept);
  if (data !== undefined && data.message !== "success") return data;
};
