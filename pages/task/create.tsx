import { useState } from "react";
import { Task } from "../../types/task"
import { Guid } from "guid-typescript";

const Create = ()=>{
    const [state, setState] = useState("");
    
    const handleClick = ()=>{
        const newTask: Task = {
            id: Guid.create().toString(),
            title: state.toString(),
            isDone: false
        }
        setState("")
        localStorage.setItem(newTask.id.toString(),JSON.stringify(newTask))
    }

    const handleChange=(event:any)=>{
        setState(event.target.value)
    }

    return(
        <div>        
        Title <input value={state} onChange={handleChange}/>
        <button onClick={handleClick}>Add Task</button>
        </div>

    )
}
export default Create