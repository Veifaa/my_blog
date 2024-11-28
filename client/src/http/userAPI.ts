import { $host } from './index';
import { jwtDecode } from 'jwt-decode';

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post('/users/register', {
    email,
    password,
  });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};
