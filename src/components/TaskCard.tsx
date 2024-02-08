import { BsPencil, BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Switch } from "@headlessui/react";
import { updateTodoStatus } from "../redux/features/todoSlice";

const TaskCard = () => {
  const tasks = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleMarkComplete = (taskId) => {
    console.log(taskId);
    dispatch(updateTodoStatus(taskId));

  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    // Add your edit task logic here
    console.log("Edit task:", taskId);
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
            <span
              className={`text-sm ${
                task.isCompleted ? "text-green-200" : "text-gray-500"
              }`}
            >{`Priority: ${task.priority}`}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              checked={tasks.isCompleted}
              onChange={()=>handleMarkComplete(task.id)}
              className={`${tasks.isCompleted ? "bg-teal-900" : "bg-gray-600"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${
                  tasks.isCompleted ? "translate-x-9" : "translate-x-0"
                }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-600 focus:outline-none focus:ring focus:border-red-300 text-3xl"
            >
              <BsTrash />
            </button>
            <button
              onClick={() => handleEditTask(task.id)}
              className="text-2xl"
            >
              <BsPencil />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
