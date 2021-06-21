import axios from "axios";
import { API } from "../config/config.json";

export const addClass = async (newClass) => {
  await axios.post(API + `/class/add`, newClass);
};
export const updateClass = async (id, updateClass) => {
  await axios.put(API + `/class/update/${id}`, updateClass);
};

export const getClassForTeacher = async (id) => {
  const { data } = await axios.get(API + `/class/teacher/${id}`);
  return data;
};
export const getClassForDept = async (id) => {
  const { data } = await axios.get(API + `/class/dept/${id}`);
  return data;
};
export const getSubForDept = async (id) => {
  const { data } = await axios.get(API + `/sub/dept/${id}`);
  return data;
};
export const deleteClass = async (id) => {
  await axios.delete(API + `/class/delete/${id}`);
};
export const getClassForStudent = async (deptId, sem) => {
  const { data } = await axios.get(API + `/class/${deptId}/${sem}`);
  return data;
};
export const getSpecClass = async (id) => {
  const { data } = await axios.get(API + `/class/${id}`);
  return data;
};
export const getStudentForClass = async (dept, sem) => {
  const { data } = await axios.get(API + `/student/${dept}/${sem}`);
  return data;
};
export const takeStudentAttendance = async (newAttend) => {
  await axios.post(API + `/attend/add`, newAttend);
};
