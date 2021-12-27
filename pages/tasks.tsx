import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { Task } from '../types/task'
import { HStack, VStack } from '@chakra-ui/react'
import { Guid } from "guid-typescript";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import useTasks from '../hooks/hooks';

const fetcher = () =>{
    var tasks:Task[] = []
    for(var item in localStorage){
        const task:Task = JSON.parse(localStorage.getItem(item)!)
        if(!item.includes("cache") && task !== null){
            tasks.push(task)
        }
    }
    console.log(tasks)
    return tasks
}


const Tasks = ()=>{
    const{data} = useSWR('/tasks',fetcher)
    const[tasks,setTasks] = useTasks(data!);

    return(
        <div>
            {data?.map(task =>(
                <HStack key={Guid.create().toString()}>
                    <Checkbox isChecked={task?.isDone}>
                    <p>{task?.title}</p>
                    </Checkbox>
                </HStack>
            ))}
        </div>
    )
}
export default Tasks
