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
                <Container maxW='xl' centerContent>
                    <Box padding='2'  maxW='3xl'>
                    <HStack>
                    <Checkbox size='lg' colorScheme={handleColor(task.isDone)} isChecked={task.isDone} onChange={()=> handleChange(task.id)}>
                        <Button colorScheme={handleColor(task.isDone)} onClick={()=>{handleChange(task.id)}}>{task.title}</Button>
                    </Checkbox>
                    </HStack>
                    </Box>
                </Container>
                <Container maxW='xl' centerContent>
                    <Box padding='2'  maxW='3xl'>
                    <HStack>
                    <EditModal id={task.id}/>
                    <Button colorScheme='red' onClick={()=>{handleDeleteClick(task.id)}}>Delete</Button>
                    </HStack>
                    </Box>
                </Container>
            </HStack>  
        ))}
    </VStack>
)
}


export default Tasks;