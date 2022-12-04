import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../api/axios';
import type { TodoType } from '../types';

const baseUrl = '/todos';

const getTodos = createAsyncThunk('getTodo', async (filterValue: string) => {
  const response = await axiosInstance.get<TodoType[]>(baseUrl, { params: { filterValue } });
  return response.data;
});

export default getTodos;
