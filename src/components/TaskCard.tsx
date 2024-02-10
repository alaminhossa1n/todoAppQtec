import { BsTrash } from "react-icons/bs";
import { useAppDispatch } from "../redux/hooks";
import { removeTodo, updateTodoStatus } from "../redux/features/todoSlice";
import Modal from "./Modal";
import { TTodos } from "@/types";

const TaskCard: React.FC<{ tasks: TTodos[] }> = ({ tasks }) => {
  const dispatch = useAppDispatch();

  const handleMarkComplete = (taskId: string) => {
    dispatch(updateTodoStatus(taskId));
  };

  const handleDeleteTask = (taskId: string) => {
    dispatch(removeTodo(taskId));
  };

  return (
    <div className="mx-auto mt-8">
      {tasks?.map((task) => (
        <div
          key={task.id}
          className={`flex items-center justify-between p-4 mb-4 w-full bg-gray-100 border rounded-md ${
            task.isCompleted ? "line-through opacity-40" : ""
          } shadow-lg`}
        >
          <div className="flex-1">
            <h3
              className={`text-2xl font-bold ${
                task.isCompleted ? "text-gray-600" : "text-violet-600"
              }`}
            >
              {task.title}
            </h3>
            <p className="text-lg text-gray-600">{task.description}</p>
            <p
              className={`font-semibold ${
                task.priority === "low" ? "text-yellow-600" : ""
              } ${task.priority === "medium" ? "text-orange-400" : ""} ${
                task.priority === "high" ? "text-red-600" : ""
              }`}
            >{`Priority: ${task.priority}`}</p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleDeleteTask(task.id)}
              className={`text-red-500 hover:text-red-600 focus:outline-none focus:ring focus:border-red-300 text-2xl ${
                task.isCompleted ? "text-gray-500 cursor-not-allowed" : ""
              }`}
              disabled={task.isCompleted}
            >
              <BsTrash />
            </button>
            <div>
              <Modal task={task} />
            </div>
            <input
              type="checkbox"
              name=""
              id=""
              className="form-checkbox h-5 w-5 text-green-500 focus:outline-none focus:ring focus:border-blue-300"
              checked={task.isCompleted}
              onChange={() => handleMarkComplete(task.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
