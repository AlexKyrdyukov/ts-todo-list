import type { TodoType } from '../types/types';
import axiosInstance from './axios';

const deleteTodo = (id: string) => {
  return axiosInstance.delete(`todos/${id}`);
};

const changeStatus = (value: boolean) => {
  return axiosInstance.patch('todos/completed', { value });
};

const deleteCompletedTodos = () => {
  return axiosInstance.delete('todos/all');
};

const changeTodo = (id: string, todoText: string, isCompleted: boolean) => {
  return axiosInstance.patch(`todos/${id}`, { todoText, isCompleted });
};

const createTodo = async (todoTitle: string, todoStatus: boolean) => {
  const response = await axiosInstance.post<TodoType>('todos/', { todoTitle, todoStatus });
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
