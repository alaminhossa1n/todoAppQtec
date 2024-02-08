import { createSlice } from "@reduxjs/toolkit";

type TTodos = {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodos[];
};

//initial state
const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id != action.payload);
    },
    updateTodoStatus: (state, action) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, updateTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
