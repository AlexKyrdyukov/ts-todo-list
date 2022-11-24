import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../webApi';
import routes from '../webApi/routes';

export const getTodosFromDB = createAsyncThunk('getTodos', async () => {
  const res = await axiosInstance.get(routes.BASE_URL);
  return res.data;
});

export const setTodoInDB = createAsyncThunk('postTodo', async (todoTitle: string) => {
  const response = axiosInstance.post('/', { todoTitle });
  const result = await (await response).data;
  return result;
});

export const deleteCurrentTodo = createAsyncThunk('deleteTodo', async (_id: string) => {
  // eslint-disable-next-line no-console
  const params = { _id };
  // eslint-disable-next-line no-console
  console.log(params);
  const response = axiosInstance.delete('/:id', { params });
  // eslint-disable-next-line no-console, no-underscore-dangle
  const result = await (await response).data._id;
  // eslint-disable-next-line no-underscore-dangle
  return result;
});
