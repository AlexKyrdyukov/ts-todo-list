import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../webApi/axios';

export const setTodoInDB = createAsyncThunk('postTodo', async (todoTitle: string) => {
  try {
    const response = await axiosInstance.post('/', { todoTitle });

    const result = await response.data;
    return result;
  } catch (error) {
    console.warn(error);
  }
});
