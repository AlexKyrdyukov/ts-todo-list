import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../api/axios';

const getTodos = createAsyncThunk('getTodo', async (filter: string) => {
  const response = await axiosInstance.get('/todos', { params: { filter } });
  return response.data;
});

export default getTodos;
