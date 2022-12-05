import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../api/axios';
import type { TodoType } from '../types';

const getTodos = createAsyncThunk('baseUrl', async (filterValue: string) => {
  const response = await axiosInstance.get<TodoType[]>('/todos', { params: { filterValue } });
  return response.data;
});

export default getTodos;
