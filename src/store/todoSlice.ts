import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { setTodoInDB } from '../store/todoThunks';
import type {
  TodoType,
  InitialStateType } from '../types';

import {
  TodoFilterENUM,
} from '../types';

type ChangeTodoTextType = {
  text: string;
  _id: string;
};
const arrayTodos: TodoType[] = [];
export const initialState: InitialStateType = {
  todos: arrayTodos,
  filter: TodoFilterENUM.all,
};

export const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    filterTodo: (state, action: PayloadAction<TodoFilterENUM>) => {
      state.filter = action.payload;
    },
    installTodos: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload;
    },
    changeStatusTodo: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-console
      console.log(action);
      const todoChangeStatus = state.todos.findIndex(
        (item) => item._id === action.payload,
      );
      state.todos[todoChangeStatus].completed =
        !state.todos[todoChangeStatus].completed;
    },

    changeStatusAllTodos: (state) => {
      state.todos = state.todos.map((item) => {
        return { ...item, completed: true };
      });
    },

    deleteCompletedTodo: (state, action: PayloadAction<string>) => {
      const todoDelete = state.todos.findIndex(
        (item) => item._id === action.payload,
      );
      state.todos.splice(todoDelete, 1);
    },

    changeTodoText: (state, action: PayloadAction<ChangeTodoTextType>) => {
      const newText = action.payload.text;
      const todoId = action.payload._id;
      const indexTodo = state.todos.findIndex((item) => item._id === todoId);
      state.todos[indexTodo].title = newText;
    },

    deleteAllCompleteTodos: (state) => {
      state.todos = state.todos.filter((item) => !item.completed);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setTodoInDB.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

export const todosSliceActions = todosSlice.actions;

export default todosSlice.reducer;
