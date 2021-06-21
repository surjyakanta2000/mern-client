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
  await axios.post(API + `/tech/add`, newTech);
};
export const updateTeacher = async (id, teacher) => {
  await axios.put(API + `/tech/update/${id}`, teacher);
};
export const deleteTeacher = async (id) => {
  await axios.delete(API + `/tech/delete/${id}`);
};
