import { useDispatch as useReduxDispatch } from 'react-redux';

import type { AppDispatch } from '../redux/store';

const useDispatch: () => AppDispatch = useReduxDispatch;

export default useDispatch;
