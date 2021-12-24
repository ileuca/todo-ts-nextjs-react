import useSWR from "swr"
import styles from "../../styles/Home.module.css"
import { Task } from "../../types/task"


const SingleTask = (id:string)=>{
    const{data} = useSWR("/task/${id}", id =>{
        const task:Task = JSON.parse(localStorage.getItem(id.toString())!)
        return task
    })
    return(
        <div className={styles.title}>
            Id:{data?.id}
            Title:{data?.title}
            Done:{data?.isDone}
        </div>
    )
}

export default SingleTask