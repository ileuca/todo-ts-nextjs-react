import useTasks from "@/hooks/useTasks";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
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

  const clearAll = () => {
    setTasks([]);
  };

  const handleColor = (isDone: boolean | undefined) => {
    if (isDone) {
      return "green.400";
    } else {
      return "";
    }
  };

  return (
    <VStack height={"100vh"}>
      <HStack>
        <CreateModal />
        <Button
          colorScheme="orange"
          onClick={clearAll}
          disabled={tasks?.length === 0}
        >
          Clear All
        </Button>
      </HStack>
      <VStack spacing={4} align="stretch">
        <VStack spacing={4}>
          {tasks?.map((task) => (
            <Flex
              key={task.id}
              justify="space-between"
              align="center"
              p={4}
              boxShadow="md"
              borderRadius="md"
              backgroundColor={handleColor(task.isDone)}
            >
              <Checkbox
                size="lg"
                colorScheme={handleColor(task.isDone)}
                isChecked={task.isDone}
                onChange={() => handleChange(task.id)}
                paddingRight={4}
              />
              <Box flex="1" textAlign="left" minW={0} marginRight={3}>
                <Button
                  justifyContent="left"
                  variant="ghost"
                  onClick={() => {
                    handleChange(task.id);
                  }}
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {task.title}
                </Button>
              </Box>
              <EditModal id={task.id} />
              <Button
                colorScheme="red"
                onClick={() => {
                  handleDeleteClick(task.id);
                }}
                marginLeft={3}
                marginRight={3}
              >
                Delete
              </Button>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Tasks;
