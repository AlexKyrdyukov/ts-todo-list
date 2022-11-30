import axiosInstance from './axios';

const deleteCurrentTodo = async (id: string) => {
  try {
    await axiosInstance.delete(`/${id}`);
  } catch (error) {
    console.warn(error);
  }
};

const changeStatus = async (flag: boolean) => {
  try {
    await axiosInstance.patch('/completed', { params: { flag } });
  } catch (error) {
    console.warn(error);
  }
};

const getTodos = async (filter: string) => {
  try {
    const response = await axiosInstance.get('/', { params: { filter } });
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

const deleteCompletedTodos = async () => {
  try {
    await axiosInstance.delete('/all');
  } catch (error) {
    console.warn(error);
  }
};

const setChangesTodoData = async (id: string, titleText: string) => {
  try {
    await axiosInstance.patch(`/${id}`, { params: { titleText } });
  } catch (error) {
    console.warn(error);
  }
};

export default { setChangesTodoData,
  deleteCompletedTodos,
  getTodos,
  changeStatus,
  deleteCurrentTodo };
