import { mutate } from "swr";
import { Task } from "../types/task";


export const setData = (path:string, data:any):void=>{
    localStorage.setItem(path, JSON.stringify(data));
    mutate(path, data);
}

export const getData = async (path:string):Promise<Task[] | undefined> =>{
    var data;
    if(typeof window !== 'undefined'){
        data = await localStorage.getItem(path);
    }

    if(data){
        return JSON.parse(data) as Task[]
    }

    return undefined;
}

export default {
    set:setData,
    get:getData
}