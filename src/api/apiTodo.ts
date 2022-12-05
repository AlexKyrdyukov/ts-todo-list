import type { TodoType } from '../types/types';
import axiosInstance from './axios';

const baseUrl = '/todos';

const deleteTodo = (id: string) => {
  return axiosInstance.delete(`${baseUrl}/${id}`);
};

const changeStatus = (value: boolean) => {
  return axiosInstance.patch(`${baseUrl}/completed`, { value });
};

const deleteCompletedTodos = () => {
  return axiosInstance.delete(`${baseUrl}/all`);
};

const changeTodo = (id: string, todoText: string, isCompleted: boolean) => {
  return axiosInstance.patch(`${baseUrl}/${id}`, { todoText, isCompleted });
};

const createTodo = async (todoTitle: string, todoStatus: boolean) => {
  const response = await axiosInstance.post<TodoType>(baseUrl, { todoTitle, todoStatus });
  const result = response.data;
  return result;
};

export default {
  changeTodo,
  deleteCompletedTodos,
  changeStatus,
  deleteTodo,
  createTodo,
};
