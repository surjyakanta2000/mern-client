import axios from "axios";
import { API } from "../config/config.json";

export const getTeacher = async () => {
  const { data } = await axios.get(API + `/tech/all`);
  return data;
};
export const getSpecTeacher = async (id) => {
  const { data } = await axios.get(API + `/tech/${id}`);
  return data;
};
export const addTeacher = async (newTech) => {
  const { data } = await axios.post(API + `/tech/add`, newTech);
  if (data !== undefined && data.message !== "success") return data;
};
export const updateTeacher = async (id, teacher) => {
  const { data } = await axios.put(API + `/tech/update/${id}`, teacher);
  if (data !== undefined && data.message !== "success") return data;
};
export const deleteTeacher = async (id) => {
  await axios.delete(API + `/tech/delete/${id}`);
};
export const updateProfile = async (id, data) => {
  await axios.put(API + `/tech/profile/update/${id}`, data);
};
