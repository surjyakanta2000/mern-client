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
  await axios.post(API + `/student/add`, newStudent);
};
export const updateStudent = async (id, student) => {
  await axios.put(API + `/student/update/${id}`, student);
};
export const deleteStudent = async (id) => {
  await axios.delete(API + `/student/delete/${id}`);
};

export const getStudentAttend = async (id) => {
  const { data } = await axios.get(API + `/attend/student/${id}`);
  return data;
};
