import { BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeTodo, updateTodoStatus } from "../redux/features/todoSlice";
import Modal from "./Modal";

const TaskCard = () => {
  const tasks = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleMarkComplete = (taskId: string) => {
    dispatch(updateTodoStatus(taskId));
  };

  const handleDeleteTask = (taskId: string) => {
    console.log(taskId);
    dispatch(removeTodo(taskId));
  };

  return (
    <div className="mx-auto max-w-full mt-8">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex items-center justify-between p-4 mb-4 bg-${
            task.isCompleted ? "green" : "white"
          } rounded-md border ${
            task.isCompleted ? "border-green-500" : "border-gray-300"
          }`}
        >
          <div>
            <h3
              className={`text-lg font-medium ${
                task.isCompleted ? "text-white" : "text-gray-800"
              }`}
            >
              {task.title}
            </h3>
            <p>{task.description}</p>
            <span
              className={`text-sm ${
                task.isCompleted ? "text-green-200" : "text-gray-500"
              }`}
            >{`Priority: ${task.priority}`}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-600 focus:outline-none focus:ring focus:border-red-300 text-3xl"
            >
              <BsTrash />
            </button>
            <Modal task={task} />
            <input
              type="checkbox"
              name=""
              id=""
              className="size-5"
              onChange={() => handleMarkComplete(task.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
