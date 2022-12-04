import type { TodoType } from '../types/types';
import axiosInstance from './axios';

const baseUrl = '/todos';

const deleteCurrentTodo = (id: string) => {
  axiosInstance.delete<string>(`${baseUrl}/${id}`);
};

const changeStatus = (value: boolean) => {
  axiosInstance.patch<string>(`${baseUrl}/completed`, { value });
};

const deleteCompletedTodos = () => {
  axiosInstance.delete<string>(`${baseUrl}/all`);
};

const setChangesTodoData = (id: string, todoText: string, isCompleted: boolean) => {
  axiosInstance.patch<string>(`${baseUrl}/${id}`, { todoText, isCompleted });
};

const createTodo = async (todoTitle: string, todoStatus: boolean) => {
  const response = await axiosInstance.post<TodoType>(baseUrl, { todoTitle, todoStatus });
  const result = response.data;
  return result;
};

export default {
  setChangesTodoData,
  deleteCompletedTodos,
  changeStatus,
  deleteCurrentTodo,
  createTodo,
};
