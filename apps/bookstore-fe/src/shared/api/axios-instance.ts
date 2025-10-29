//let's create a single instance for the axios to be used across the application
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('auth-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle global errors, e.g., redirect to login on 401
//     if (error.response && error.response.status === 401) {
//       console.error('Unauthorized request.');
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;