import axios from "axios";
import { API } from "../config/config.json";

export const getSubject = async () => {
  const { data } = await axios.get(API + `/sub/all`);
  return data;
};
export const getSpecSubject = async (id) => {
  const { data } = await axios.get(API + `/sub/${id}`);
  return data;
};
export const addSubject = async (newSubject) => {
  await axios.post(API + `/sub/add`, newSubject);
};
export const updateSubject = async (id, Subject) => {
  await axios.put(API + `/sub/update/${id}`, Subject);
};
export const deleteSubject = async (id) => {
  await axios.delete(API + `/sub/delete/${id}`);
};
