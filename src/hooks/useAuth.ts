import client from '../client';
import User from '../entities/User';

const useAuth = () => {
  const login = (email: string, password: string) => client.post('/login', {
    email: email,
    password: password,
  });

  const signIn = (email: string, password: string) => client.post('/sign-in', {
    email: email,
    password: password,
  });

  const getUser = () => client.get<User>('/users/me');

  return {
    login,
    signIn,
    getUser,
  };
};
