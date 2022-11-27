import axiosInstance from '.';

export const changeTodoStatus = async (id: string) => {
  try {
    await axiosInstance.patch(`/status/${id}`);
  } catch (error) {
    console.warn(error);
  }
};

export const deleteCurrentTodo = async (id: string) => {
  try {
    await axiosInstance.delete(`/${id}`);
  } catch (error) {
    console.warn(error);
  }
};

export const setAllTodosCompleted = async () => {
  try {
    await axiosInstance.patch('/completed');
  } catch (error) {
    console.warn(error);
  }
};

export const getTodos = async (filter: string) => {
  try {
    const response = await axiosInstance.get(`/${filter}`);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
};

export const deleteCompletedTodos = async () => {
  try {
    await axiosInstance.delete('/');
  } catch (error) {
    console.warn(error);
  }
};

export const setInDBNewTodoText = async (id: string, titleText: string) => {
  try {
    await axiosInstance.patch(`/title/${id}/${titleText}`);
  } catch (error) {
    console.warn(error);
  }
};
