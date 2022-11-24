import axiosInstance from '.';

const setTodoDB = async (todoTitle: string) => {
  const response = axiosInstance.post('/', { todoTitle });
  const result = await response;
  // eslint-disable-next-line no-console
  console.log(result.data);
};
export default setTodoDB;
