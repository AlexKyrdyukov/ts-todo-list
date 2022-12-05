import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type {
  TodoType,
  InitialStateType } from '../types';
import getTodos from '../store/todoThunks';

import {
  TodoFilterENUM,
} from '../types';

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

    setTodosStatus: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload;
    },

    addTodo: (state, action:PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },

    changeStatusTodo: (state, action: PayloadAction<string>) => {
      const todoChangeStatus = state.todos.findIndex(
        (item) => item._id === action.payload,
      );
      state.todos[todoChangeStatus].completed =
        !state.todos[todoChangeStatus].completed;
    },

    deleteCompletedTodo: (state, action: PayloadAction<string>) => {
      const todoDelete = state.todos.findIndex(
        (item) => item._id === action.payload,
      );
      state.todos.splice(todoDelete, 1);
    },

    changeTodoText: (state, action: PayloadAction<{_id: string; text: string}>) => {
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
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

export const todosSliceActions = todosSlice.actions;

export default todosSlice.reducer;
