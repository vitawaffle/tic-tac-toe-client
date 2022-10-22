import client from '../client';
import User from '../entities/User';

const useGetUser = () => () => client.get<User>('/users/me');

export default useGetUser;
