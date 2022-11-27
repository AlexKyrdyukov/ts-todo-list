import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../webApi';

export const setTodoInDB = createAsyncThunk('postTodo', async (todoTitle: string) => {
  try {
    const response = axiosInstance.post('/', { todoTitle });

    const result = await (await response).data;
    return result;
  } catch (error) {
    console.warn(error);
  }
});
