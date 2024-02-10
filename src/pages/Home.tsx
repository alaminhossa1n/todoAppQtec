import { useEffect, useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TaskCard from "../components/TaskCard";
import { useAppSelector } from "../redux/hooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Home = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const [filter, setFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    let filteredData = todos;

    if (filter === "completed") {
      filteredData = todos.filter((task) => task.isCompleted);
    } else if (filter === "notCompleted") {
      filteredData = todos.filter((task) => !task.isCompleted);
    }

    if (priorityFilter !== "all") {
      filteredData = filteredData.filter(
        (task) => task.priority === priorityFilter
      );
    }

    setFilteredTodos(filteredData);
  }, [todos, filter, priorityFilter]);

  const handlePriorityChange = (value: string) => {
    setPriorityFilter(value);
  };

  return (
    <div className="p-10">
      <AddTodoForm />
      <div className="w-3/4 mt-5 mx-auto px-3 border-2 border-violet-500 rounded-md">
        <h2 className="text-2xl text-center font-bold mb-4 text-violet-800">
          Your Tasks
        </h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-gray-700 font-bold">Filter:</span>
            <button
              onClick={() => setFilter("all")}
              className={`${
                filter === "all" ? "text-violet-700 font-bold" : "text-gray-500"
              } hover:text-violet-700 focus:outline-none`}
            >
              All {`(${filteredTodos.length})`}
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`${
                filter === "completed"
                  ? "text-green-600 font-bold"
                  : "text-gray-500"
              } hover:text-green-600 focus:outline-none`}
            >
              Completed {`(${todos.filter((task) => task.isCompleted).length})`}
            </button>
            <button
              onClick={() => setFilter("notCompleted")}
              className={`${
                filter === "notCompleted"
                  ? "text-red-600 font-bold"
                  : "text-gray-500"
              } hover:text-red-600 focus:outline-none`}
            >
              Not Completed{" "}
              {`(${todos.filter((task) => !task.isCompleted).length})`}
            </button>
          </div>

          <div>
            <Select onValueChange={handlePriorityChange}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredTodos.length ? (
          <TaskCard tasks={filteredTodos} />
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
