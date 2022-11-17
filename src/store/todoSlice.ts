import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

import { getArrayFromLocaleStorage } from '../utils/localeStorage';
import type {
  InitialStateType } from '../types';
import {
  TodoFilterENUM,
} from '../types';

type ChangeTodoTextType = {
  text: string;
  id: string;
};

const arrayTodos = getArrayFromLocaleStorage();

export const initialState: InitialStateType = {
  todos: arrayTodos,
  filter: TodoFilterENUM.all,
};

export const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        completed: false,
        id: uuidv4(),
        title: action.payload,
      });
    },

    filterTodo: (state, action: PayloadAction<TodoFilterENUM>) => {
      state.filter = action.payload;
    },

    changeStatusTodo: (state, action: PayloadAction<string>) => {
      const todoChangeStatus = state.todos.findIndex(
        (item) => item.id === action.payload,
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
        (item) => item.id === action.payload,
      );
      state.todos.splice(todoDelete, 1);
    },

    changeTodoText: (state, action: PayloadAction<ChangeTodoTextType>) => {
      const newText = action.payload.text;
      const todoId = action.payload.id;
      const indexTodo = state.todos.findIndex((item) => item.id === todoId);
      state.todos[indexTodo].title = newText;
    },

    deleteAllCompleteTodos: (state) => {
      state.todos = state.todos.filter((item) => !item.completed);
    },
  },
});

export const todosSliceActions = todosSlice.actions;

export default todosSlice.reducer;
