import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;       //If the task is blank, ignore and don't do anything. trim() removes whitespace)
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 gap-7 ">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        className="border p-2 rounded mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-2 ml-5 rounded"
      >
        Add Task Show
      </button>
    </form>
  );
};

export default AddTaskForm;
