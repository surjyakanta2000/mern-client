import axios from 'axios';
import {API} from '../config/config.json';

export const getDept = async()=>{
    const {data} = await axios.get(API +`/dept/all`);
    return data;
}
export const getSpecDept = async(id)=>{
    const {data} = await axios.get(API +`/dept/${id}`);
    return data;
}
export const addDept = async(newDept)=>{
     await axios.post(API +`/dept/add`,newDept);
}
export const updateDept = async(id,dept)=>{
    await axios.put(API +`/dept/update/${id}`,dept);
}