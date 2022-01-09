import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router"
import useTasks from "../../hooks/useTasks";
import { Task } from "../../types/task";

const SingleTask = ()=>{
    const router = useRouter();
    const {tasks, updateTask} = useTasks();
    const initialtask = tasks?.find(task=>{return task.id === router.query.id});

    const handleChange = (event:any) =>{
        const updatedTask:Task ={
            id: initialtask?.id,
            title: event.target.value,
            isDone: initialtask?.isDone
        }
        updateTask(updatedTask.id,updatedTask)
    }

    const handleClick =()=>{
        window.location.href="/"
    }

    return(
        <>
        <p>{initialtask?.id}</p>
        <p>{initialtask?.title}</p>

        <Input value={initialtask?.title || ""} onChange={handleChange} placeholder='Title' />
        <Button onClick={handleClick} colorScheme='blue'>Close</Button>
        </>
    )}


export default SingleTask

