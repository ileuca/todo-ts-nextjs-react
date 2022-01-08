import { Button, Checkbox, HStack, Input, useDisclosure, VStack } from "@chakra-ui/react";
import Link from "next/link";
import useTasks from "../hooks/useTasks";

const Tasks = ()=>{
const {tasks, changeTasksStatus} = useTasks();
const handleChange = (id:string | undefined) =>{
    changeTasksStatus(id)
}
const handleCreateClick = ()=>{
    window.location.href = "/task/create"
}

const handleEditClick = (id:string | undefined)=>{
    window.location.href = "/task/" + id
}
return(
    <VStack>
    <Button onClick={handleCreateClick}>Create</Button>
        {tasks?.map((task)=>(
            <HStack key={task.id}>
            <Checkbox isChecked={task.isDone} onChange={()=> handleChange(task.id)}>{task.title}</Checkbox>
            <Button onClick={()=>{handleEditClick(task.id)}}>Edit</Button>
            </HStack>
        ))}
    </VStack>
)
}


export default Tasks;