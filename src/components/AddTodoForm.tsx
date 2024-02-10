import { FormEvent, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/features/todoSlice";

const AddTodoForm = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const generateUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = generateUniqueId();

    dispatch(addTodo({ title, description, priority, id }));
    setTitle("");
    setDescription("");
    setPriority("low");
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-lg: bg-white shadow-md rounded-md p-6"
      >
        <div className="flex gap-4 items-center">
          <input
            type="text"
            name="title"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="description"
            placeholder="Add Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <select
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          >
            {["low", "medium", "high"].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
