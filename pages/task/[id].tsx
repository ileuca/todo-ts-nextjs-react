import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import useTasks from "../../hooks/useTasks";
import { Task } from "../../types/task";

const SingleTask = ()=>{
    const router = useRouter();
    const {tasks, updateTask} = useTasks();
    const initialtask = tasks?.find(task=>{return task.id === router.query.id});


    return(
        <>
        <p>{initialtask?.id}</p>
        <p>{initialtask?.title}</p>

        <Input value={initialtask?.title || ""} onChange={()=>{}} placeholder='Title' />
        <Button onClick={()=>{}} colorScheme='blue'>Update Task</Button>
        </>
    )}


export default SingleTask

