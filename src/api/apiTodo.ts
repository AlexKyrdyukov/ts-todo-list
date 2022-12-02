import axiosInstance from './axios';

const baseUrl = '/todos';

const deleteCurrentTodo = (id: string) => {
  return axiosInstance.delete(`/${id}`);
};

const changeStatus = async (flag: boolean) => {
  return axiosInstance.patch('/completed', { params: { flag } });
};

const deleteCompletedTodos = async () => {
  await axiosInstance.delete('/all');
};

const setChangesTodoData = async (id: string, titleText: string) => {
  await axiosInstance.patch(`${baseUrl}${id}`, { params: { titleText } });
};

const createTodo = async (todoTitle: string) => {
  const response = await axiosInstance.post(baseUrl, { todoTitle });
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
