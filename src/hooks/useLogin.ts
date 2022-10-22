import useDispatch from './useDispatch';
import useGetUser from './useGetUser';
import client from '../client';
import { setUser } from '../redux/slices/userSlice';

const useLogin = () => {
  const dispatch = useDispatch();
  const getUser = useGetUser();

  return (email: string, password: string) => client.post('/login', {
    email,
    password,
  }).then(
    () => getUser().then(({ data }) => dispatch(setUser(data)))
  );
};
