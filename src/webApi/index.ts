import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/todos',
});

export default axiosInstance;
