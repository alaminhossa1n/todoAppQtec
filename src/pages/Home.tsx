
import AddTodoForm from "../components/AddTodoForm";
import TaskCard from "../components/TaskCard";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  console.log(todos);

  return (
    <div className="border mt-20 p-10">
      <AddTodoForm />
      <div className="w-3/4 mt-5 mx-auto px-3 border-2 border-violet-600 rounded-md">
        <TaskCard />

      </div>
    </div>
  );
};

export default Home;
