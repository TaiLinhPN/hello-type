import React, { createContext, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

interface Task{
  id: string,
  title: string
}
interface TaskContexDefauld {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (title: string) => void;
}

interface TaskContexProp{
  children: ReactNode
}

const TaskDefauld = {
  tasks: [],
  addTask: () => {},
  removeTask: () => {}
};
export const TaskContex = createContext<TaskContexDefauld>(TaskDefauld);

const TaskContextProvider = ({ children }: TaskContexProp) => {
  const [tasks, setTasks] = useState<Task[]>(TaskDefauld.tasks);
  const addTask = (title: string) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  }
  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id != id));
  }

  const taskContexData = { tasks, addTask, removeTask } ;
  return (
    <TaskContex.Provider value={taskContexData}>{children}</TaskContex.Provider>
  );
}

export default TaskContextProvider;