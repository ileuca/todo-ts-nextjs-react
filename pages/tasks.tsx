import {Box, Button, Checkbox, Container, HStack,VStack} from "@chakra-ui/react";
import useTasks from "../hooks/useTasks";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
const Tasks = ()=>{
const {tasks, changeTasksStatus,setTasks} = useTasks();
const handleChange = (id:string | undefined) =>{
    changeTasksStatus(id)
}
const handleCreateClick = ()=>{
    window.location.href = "/task/create"
}

const handleEditClick = (id:string | undefined)=>{
    window.location.href = "/task/" + id
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
    <Button colorScheme="purple" onClick={handleCreateClick}>Create</Button>
        {tasks?.map((task)=>(
            <HStack key={task.id}>
                <Container maxW='xl' centerContent>
                    <Box padding='2'  maxW='3xl'>
                    <HStack>
                    <Checkbox size='lg' colorScheme={handleColor(task.isDone)} isChecked={task.isDone} onChange={()=> handleChange(task.id)}>
                        <Button colorScheme={handleColor(task.isDone)}>{task.title}</Button>
                    </Checkbox>
                    </HStack>
                    </Box>
                </Container>
                <Container maxW='xl' centerContent>
                    <Box padding='2'  maxW='3xl'>
                    <HStack>
                    <Button colorScheme='blue' onClick={()=>{handleEditClick(task.id)}}>Edit</Button>
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