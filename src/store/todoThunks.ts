import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../webApi/routes';

export const fetchTodos = createAsyncThunk('todosSlice', async () => {
  const res = await axios.get(routes.BASE_URL);
  return res.data;
});
