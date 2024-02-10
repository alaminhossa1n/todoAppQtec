import { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TaskCard from "../components/TaskCard";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((task) => {
    if (filter === "completed") {
      return task.isCompleted;
    } else if (filter === "notCompleted") {
      return !task.isCompleted;
    } else {
      return true;
    }
  });

  return (
    <div className="border mt-20 p-10">
      <AddTodoForm />
      <div className="w-3/4 mt-5 mx-auto px-3 border-2 border-violet-500 rounded-md">
        <h2 className="text-2xl text-center font-bold mb-4 text-violet-800">
          Your Tasks
        </h2>
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-gray-700 font-bold">Filter:</span>
          <button
            onClick={() => setFilter("all")}
            className={`${
              filter === "all" ? "text-violet-700 font-bold" : "text-gray-500"
            } hover:text-violet-700 focus:outline-none`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`${
              filter === "completed"
                ? "text-green-600 font-bold"
                : "text-gray-500"
            } hover:text-green-600 focus:outline-none`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("notCompleted")}
            className={`${
              filter === "notCompleted"
                ? "text-red-600 font-bold"
                : "text-gray-500"
            } hover:text-red-600 focus:outline-none`}
          >
            Not Completed
          </button>
        </div>
        {filteredTodos.length ? (
          <TaskCard />
        ) : (
          <div className="p-5 text-center font-bold">
            <p>No tasks found based on the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
