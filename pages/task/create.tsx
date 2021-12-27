import { useState } from "react";
import useTasks from "../../hooks/useTasks";

const Create = () => {
  const { addTask } = useTasks();
  const [state, setState] = useState("");

  const handleClick = async () => {
    const task = await addTask(state.toString());
    setState("");

    console.log(`created: ${task.title}`);
    // @todo: show a popup notification
  };

  const handleChange = (event: any) => {
    setState(event.target.value);
  };

  return (
    <div>
      Title <input value={state} onChange={handleChange} />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};
export default Create;
