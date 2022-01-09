import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useFocus from "../../hooks/useFocus";
import useTasks from "../../hooks/useTasks";


const CreateTask =()=> {
    const {addTask} = useTasks();
    const [taskTitle, setTaskTitle] = useState("");
    const inputRef = useFocus();

    const handleChange = (event:any) =>{
        setTaskTitle(event.target.value);
    }
    const handleClick = ()=>{
        const task = addTask(taskTitle.toString());
        setTaskTitle("");
        inputRef.setFocus();
    }
    return(
        <div>
            <Input ref={inputRef.ref} value={taskTitle} onChange={handleChange} placeholder='Title' />
            
            <Button onClick={handleClick} colorScheme='green'>Add Task</Button>
        </div>
    )
}

export default CreateTask;