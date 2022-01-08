import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useTasks from "../../hooks/useTasks";


const CreateTask =()=> {
    const {addTask} = useTasks();
    const [taskTitle, setTaskTitle] = useState("");
    const handleChange = (event:any) =>{
        setTaskTitle(event.target.value)
    }
    const handleClick = ()=>{
        const task = addTask(taskTitle.toString());
        setTaskTitle("")
        window.location.href="/tasks"
    }
    return(
        <div>
            Title : <Input value={taskTitle} onChange={handleChange} placeholder='Title' />
            <Button onClick={handleClick} colorScheme='blue'>Add Task</Button>
        </div>
    )
}

export default CreateTask;