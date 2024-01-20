import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useTasks from "../../hooks/useTasks";
import { Task } from "@/types/types";

const SingleTask = ({ id }: { id: string | undefined }) => {
  var initialtask: Task | undefined;
  const router = useRouter();
  const { tasks, updateTask } = useTasks();
  if (id) {
    initialtask = tasks?.find((task) => {
      return task.id === id;
    });
  } else {
    initialtask = tasks?.find((task) => {
      return task.id === router.query.id;
    });
  }

  const handleChange = (event: any) => {
    const updatedTask: Task = {
      id: initialtask?.id,
      title: event.target.value,
      isDone: initialtask?.isDone,
    };
    updateTask(updatedTask.id, updatedTask);
  };
  const handleBack = () => {
    window.location.href = "/";
  };
  return (
    <>
      <Input
        value={initialtask?.title || ""}
        onChange={handleChange}
        placeholder="Title"
      />
      <Button onClick={handleBack} colorScheme="blue">
        Back
      </Button>
    </>
  );
};

export default SingleTask;
