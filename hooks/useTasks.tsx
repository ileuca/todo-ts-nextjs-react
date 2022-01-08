import { Guid } from "guid-typescript";
import useSWR from "swr"
import client from "../lib/client";
import localfetch from "../lib/localfetch"
import { Task } from "../types/task";


const useTasks = () =>{
    const{data: tasks} = useSWR<Task[] | undefined>("/tasks", localfetch);

    const setTasks = (modifiedTasks:Task[] | undefined):(Task[] | undefined) =>{
        client.set("/tasks", modifiedTasks);
        return modifiedTasks;
    }
    const updateTask = (id:string | undefined,data:Task):(Task[] | undefined) =>{
        const updatedTasks = tasks?.map((task) => (task.id === id ? data:task));
        setTasks(updatedTasks);
        return updatedTasks;
    }
    const addTask = (title:string) =>{
        const newTask: Task = {
            id: Guid.create().toString(),
            title,
            isDone:false
        }
        setTasks([...(tasks || []),newTask]);
    }
    
    const getTask = (id:string | undefined):Task | undefined=>{
        const task = tasks?.find(task =>{
            return task.id === id
        })
        return task;
    }
    const changeTasksStatus = (id:string | undefined):void=>{
        setTasks(tasks?.map((task) => task.id === id ? {...task, isDone: !task.isDone} : task));
    }

    return {tasks, setTasks,updateTask, addTask, changeTasksStatus, getTask}
}

export default useTasks;