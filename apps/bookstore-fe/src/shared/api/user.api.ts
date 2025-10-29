import axiosInstance from './axios-instance';

interface LoginPayload {
    username: string;
    password: string;
}

export const login = (payload: LoginPayload) => axiosInstance.post('/users/login', payload);
export const register = (payload: LoginPayload) => axiosInstance.get(`/users/register`);