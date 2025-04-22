import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "./taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();
  return (
    <ul className="pl-5 w-[200px]">
      {tasks.map((task, index) => (
        <li key={index} className="mb-2 flex justify-between items-center">
          <span>{task}</span>
          <button
            onClick={() => dispatch(removeTask(index))}
            className="text-red-500"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
