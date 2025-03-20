/* eslint-disable no-console */
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { loginSuccess } from '@Store/slices/authSlice';
import { api } from '.';

interface LoginPayload {
  username: string;
  password: string;
}

// Updated login function to include credentials in the headers of the request
const login = async (credentials: LoginPayload) => {
  console.log(credentials);
  const { data } = await api.post(
    'https://api.freeapi.app/api/v1/users/login',
    {
      username: credentials.username,
      password: credentials.password,
    },
  );
  return data;
};

const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation(login, {
    onSuccess: data => {
      dispatch(loginSuccess(data.token));
      localStorage.setItem('token', data.token);
    },
    onError: error => {
      console.error('Login failed', error);
    },
  });
};

export default useLogin;
