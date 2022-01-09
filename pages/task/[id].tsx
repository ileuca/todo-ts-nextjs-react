import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router"
import useTasks from "../../hooks/useTasks";
import { Task } from "../../types/task";

const SingleTask = ({id}:{id:string | undefined})=>{
    const router = useRouter();
    const {tasks, updateTask} = useTasks();
    const initialtask = tasks?.find(task=>{return task.id === id});

    const handleChange = (event:any) =>{
        const updatedTask:Task ={
            id: initialtask?.id,
            title: event.target.value,
            isDone: initialtask?.isDone
        }
        updateTask(updatedTask.id,updatedTask)
    }

    return(
        <>
        <Input value={initialtask?.title || ""} onChange={handleChange} placeholder='Title' />
        </>
    )}


export default SingleTask

