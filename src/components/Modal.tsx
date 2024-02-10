import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";

import { Button } from "./ui/button";
import { BsPencil } from "react-icons/bs";
import { useAppDispatch } from "@/redux/hooks";
import { FormEvent, useState } from "react";
import { todoUpdate } from "../redux/features/todoSlice";

const Modal = ({ task }) => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedDoc = {
      id: task.id,
      title,
      description,
      priority,
    };
  
    dispatch(todoUpdate(updatedDoc));

    setTitle("");
    setDescription("");
    setPriority("low");
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-2xl text-yellow-500">
            <BsPencil />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
              <DialogDescription>
                Make changes to the task here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 mt-2">
              <input
                type="text"
                name="title"
                defaultValue={task.title}
                placeholder="Add a new task..."
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-violet-700 rounded-full px-4 py-2 w-full focus:outline-none focus:border-violet-900 text-violet-900 placeholder-violet-400"
              />
              <input
                type="text"
                name="description"
                defaultValue={task.description}
                placeholder="Add Description..."
                onChange={(e) => setDescription(e.target.value)}
                className="border-2 border-violet-700 rounded-full px-4 py-2 w-full focus:outline-none focus:border-violet-900 text-violet-900 placeholder-violet-400"
              />
              <select
                name="priority"
                defaultValue={task.priority}
                onChange={(e) => setPriority(e.target.value)}
                className="p-2 border-2 border-violet-700 rounded-full focus:outline-none focus:border-violet-900 text-violet-900 px-3"
              >
                {["low", "medium", "high"].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end mt-3">
              <DialogClose>
                <Button
                  type="submit"
                  className="text-white bg-violet-700 hover:bg-violet-800  p-2 focus:outline-none focus:ring focus:border-violet-500"
                >
                  Update
                </Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
