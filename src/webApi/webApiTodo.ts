import axiosInstance from '.';

export const changeTodoStatus = async (id: string) => {
  // eslint-disable-next-line no-console
  try {
    await axiosInstance.patch(`/status/${id}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const deleteCurrentTodo = async (id: string) => {
  try {
    await axiosInstance.delete(`/${id}`);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
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
    // eslint-disable-next-line no-console
    return response;
  } catch (error) {
    console.warn(error);
  }
};
