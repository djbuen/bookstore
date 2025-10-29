import { login } from '../api/user.api';
import { User } from '../types/user.types';

export const loginUser = async (username: string, password: string): Promise<User> => {
  try {
    const response = await login({ username, password });
    
    // Save auth token in sessionStorage
    if (response.data?.token) {
      sessionStorage.setItem('auth-token', response.data.token);
    }

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logoutUser = () => {
  sessionStorage.removeItem('auth-token');
};

export const getAuthToken = () => {
  return sessionStorage.getItem('auth-token');
};
