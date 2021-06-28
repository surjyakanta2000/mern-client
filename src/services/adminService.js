import axios from "axios";
import { API } from "../config/config.json";

export const getNotices = async () => {
  const { data } = await axios.get(API + `/admin/notice/all`);
  return data;
};

export const addNotice = async (notice) => {
  await axios.post(API + `/admin/notice/add`, notice);
};
export const deleteNotice = async (id) => {
  await axios.delete(API + `/admin/notice/delete/${id}`);
};
