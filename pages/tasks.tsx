import useSWR from 'swr'
import { Task } from '../types/task'
import { HStack, VStack } from '@chakra-ui/react'
import { Checkbox} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

function fetcher(){
    var tasks:Task[] = []
    for(var item in localStorage){
        const task:Task = JSON.parse(localStorage.getItem(item)!)
        if(!item.includes("cache") && task !== null){
            tasks.push(task)
        }
    }
    return tasks
    
}

const Tasks = ()=>{
    const{data,error} = useSWR('/tasks',fetcher)
    const [state,setState] = useState(data)
    useEffect(() => { setState(data); }, [data])

    const handleChange = (id:string)=>{
        let task = data!.find(task => task.id === id)
        if(task!.isDone === true){
            task!.isDone = false
            localStorage.setItem(task!.id.toString(),JSON.stringify(task))
        }else{
            task!.isDone = true   
            localStorage.setItem(task!.id.toString(),JSON.stringify(task))  
        }
        console.log(task)
    }
    return(
        <div>
            <VStack>
            {state?.map(task =>(
                    <Checkbox key={task.id} size='lg' colorScheme='green' 
                    isChecked={task.isDone}
                    onChange={() => handleChange(task.id)}>
                    <p>{task.title}</p>
                    </Checkbox>
            ))}
            </VStack>
        </div>
    )
}
export default Tasks
