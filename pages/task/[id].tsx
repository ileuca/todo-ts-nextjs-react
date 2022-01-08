import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import useTasks from "../../hooks/useTasks";
import { Task } from "../../types/task";

const SingleTask = ()=>{
    const router = useRouter();
    const {tasks, updateTask} = useTasks();
    const task = tasks?.find(task=>{return task.id === router.query.id});
    console.log("task",task)
    
    const [taskTitle, setTaskTitle] = useState(task?.title);

    const handleChange = (event:any) =>{
        setTaskTitle(event.target.value)
    }

    const handleClick = () =>{
        const updatedTask: Task ={
            id: task?.id,
            title: taskTitle,
            isDone: task?.isDone
        }
        updateTask(task?.id,updatedTask)
        window.location.href = "/tasks"
    }
    return(
        <>
        <Input value={taskTitle} onChange={handleChange}placeholder='Basic usage' />
        <Button onClick={handleClick} colorScheme='blue'>Update Task</Button>
        </>
    )}


export default SingleTask

