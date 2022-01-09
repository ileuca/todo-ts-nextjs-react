import { Box, Button, Checkbox, Container, HStack,VStack } from "@chakra-ui/react";
import CreateModal from "../components/createModal";
import EditModal from "../components/editModal";
import useTasks from "../hooks/useTasks";
const Tasks = ()=>{
const {tasks, changeTasksStatus,setTasks} = useTasks();
const handleChange = (id:string | undefined) =>{
    changeTasksStatus(id)
}

const handleDeleteClick =(id:string | undefined)=>{
    const modifiedTasks = tasks?.filter(task => task.id !== id)
    setTasks(modifiedTasks)
}
const handleColor = (isDone:boolean | undefined) =>{
    if(isDone){
        return 'teal'
    }
    else{
        return'pink'
    }
}
return(

    <VStack>
    <CreateModal/>
        {tasks?.map((task)=>(
            <HStack key={task.id}>
                    <HStack position="-webkit-sticky">
                    <Checkbox size='lg' colorScheme={handleColor(task.isDone)} isChecked={task.isDone} onChange={()=> handleChange(task.id)}>
                        <Button style={{overflow:"-moz-hidden-unscrollable", whiteSpace: "normal",wordWrap: "break-word"}} 
                        height={[`${task?.title!.length > 30 ? "60px" : "40px"}`, "40px"]} 
                        colorScheme={handleColor(task.isDone)} onClick={()=>{handleChange(task.id)}}>
                            {task.title}
                            </Button>
                    </Checkbox>
                    <EditModal id={task.id}/>
                    <Button colorScheme='red' onClick={()=>{handleDeleteClick(task.id)}}>Delete</Button>
                    </HStack>
            </HStack>  
        ))}
    </VStack>
)
}


export default Tasks;