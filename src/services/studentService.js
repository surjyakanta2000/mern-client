import axios from "axios";
import { API } from "../config/config.json";

export const getStudent = async () => {
  const { data } = await axios.get(API + `/student/all`);
  return data;
};
export const getSpecStudent = async (id) => {
  const { data } = await axios.get(API + `/student/${id}`);
  return data;
};
export const addStudent = async (newStudent) => {
  const { data } = await axios.post(API + `/student/add`, newStudent);
  if (data !== undefined && data.message !== "success") return data;
};
export const updateStudent = async (id, student) => {
  const { data } = await axios.put(API + `/student/update/${id}`, student);
  if (data !== undefined && data.message !== "success") return data;
};
export const deleteStudent = async (id) => {
  await axios.delete(API + `/student/delete/${id}`);
};

export const getStudentAttend = async (id) => {
  const { data } = await axios.get(API + `/attend/student/${id}`);
  return data;
};

export const updateProfile = async (id, data) => {
  await axios.put(API + `/student/profile/update/${id}`, data);
};
