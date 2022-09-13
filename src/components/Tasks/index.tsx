import { Button, Chip, PropTypes, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { TaskContex } from "../../contexts/TaskContext";
import { ThemeContext } from "../../contexts/ThemeContext";
const flexCenter = {
  display: "flex",
  justifyContent: "center",
  mt: 2,
};

const marginRight = {
  mr: 2,
};

const Tasks = () => {
  const [task, setTask] = useState("");

  const { tasks, addTask, removeTask } = useContext(TaskContex);
  const { theme } = useContext(ThemeContext);

  const handleSubmitTask = () => {
    if (task) {
      addTask(task);
      setTask("");
    }
  };

  const handleRemoveTask = (id: string) => {
    removeTask(id);
  };
  return (
    <Box>
      <Box sx={flexCenter}>
        <TextField
          sx={marginRight}
          label="Log your task here..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
          variant="outlined"
        />
        <Button
          variant="contained"
          color={"primary"}
          onClick={handleSubmitTask}
        >
          Add
        </Button>
      </Box>
      <Box sx={flexCenter}>
        {tasks.map((task) => (
          <Chip
            sx={marginRight}
            key={task.id}
            color={"primary"}
            label={task.title}
            onDelete={() => handleRemoveTask(task.id)}
          ></Chip>
        ))}
      </Box>
    </Box>
  );
};

export default Tasks;
