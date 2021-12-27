import useSWR from "swr";
import { Guid } from "guid-typescript";
import client from "../lib/client";
import fetcher from "../lib/fetcher";
import { Task } from "../types/task";

const useTasks = () => {
  const { data: tasks } = useSWR<Task[]>("/tasks", fetcher);

  const setTasks = async (
    modifiedTasks: Task[] | null | undefined
  ): Promise<Task[] | null | undefined> => {
    client.set("/tasks", modifiedTasks);
    return modifiedTasks;
  };

  const updateTask = async (
    id: string,
    data: Task
  ): Promise<Task[] | null | undefined> => {
    const updatedTasks = tasks?.map((task) => (task.id === id ? data : task));
    setTasks(updatedTasks);
    return updatedTasks;
  };

  const changeTaskState = async (id: string) => {
    await setTasks(
      tasks?.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const addTask = async (title: string): Promise<Task> => {
    const newTask: Task = {
      id: Guid.create().toString(),
      title,
      isDone: false
    };

    setTasks([
      ...(tasks || []), // in case we have no tasks
      newTask
    ]);

    return newTask;
  };

  return { tasks, setTasks, updateTask, addTask, changeTaskState };
};

export default useTasks;
