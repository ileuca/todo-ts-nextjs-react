import { useEffect, useState } from "react";
import Tasks from "../pages/tasks";
import { Task } from "../types/task";

export default function useTasks(initialTasks:Task[]){
    const[tasks,setTasks] = useState(initialTasks)

    return [tasks,setTasks]
}