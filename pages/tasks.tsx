import { VStack } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import useTasks from "../hooks/useTasks";

const Tasks = () => {
  const { tasks, changeTaskState } = useTasks();

  console.log("data", tasks);

  const handleChange = async (id: string) => {
    await changeTaskState(id);
  };

  console.log("tasks", tasks);
  return (
    <VStack>
      {tasks?.map((task) => (
        <Checkbox
          key={task.id}
          size="lg"
          colorScheme="green"
          isChecked={task.isDone}
          onChange={() => handleChange(task.id)}
        >
          <p>{task.title}</p>
        </Checkbox>
      ))}
    </VStack>
  );
};
export default Tasks;
