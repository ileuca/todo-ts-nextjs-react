import useTasks from "@/hooks/useTasks";
import { Button, Checkbox, HStack, VStack } from "@chakra-ui/react";
import CreateModal from "./Modals/create-modal";
import EditModal from "./Modals/edit-modal";

const Tasks = () => {
  const { tasks, changeTasksStatus, setTasks } = useTasks();
  const handleChange = (id: string | undefined) => {
    changeTasksStatus(id);
  };

  const handleDeleteClick = (id: string | undefined) => {
    const modifiedTasks = tasks?.filter((task) => task.id !== id);
    setTasks(modifiedTasks);
  };
  const handleColor = (isDone: boolean | undefined) => {
    if (isDone) {
      return "teal";
    } else {
      return "pink";
    }
  };
  return (
    <VStack>
      <CreateModal />
      {tasks?.map((task) => (
        <HStack key={task.id}>
          <HStack>
            <Checkbox
              size="lg"
              colorScheme={handleColor(task.isDone)}
              isChecked={task.isDone}
              onChange={() => handleChange(task.id)}
            >
              <Button
                style={{
                  maxWidth: "34vw",
                  minHeight: "2.5rem",
                  height: "auto",
                  overflow: "hidden",
                  whiteSpace: "break-spaces",
                  textOverflow: "ellipsis",
                  display: "inline-block",
                  textAlign: "center",
                }}
                colorScheme={handleColor(task.isDone)}
                onClick={() => {
                  handleChange(task.id);
                }}
              >
                {task.title}
              </Button>
            </Checkbox>
            <EditModal id={task.id} />
            <Button
              colorScheme="red"
              onClick={() => {
                handleDeleteClick(task.id);
              }}
            >
              Delete
            </Button>
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default Tasks;
