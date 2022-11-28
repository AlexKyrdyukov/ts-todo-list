import axiosInstance from '.';

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
    const response = await axiosInstance.get('/', { params: { filter } });
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

export const setChangesTodoData = async (id: string, titleText: string) => {
  // eslint-disable-next-line no-console
  console.log(id, titleText);
  try {
    await axiosInstance.patch(`/${id}`, { params: { titleText } });
  } catch (error) {
    console.warn(error);
  }
};
