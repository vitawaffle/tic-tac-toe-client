import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../entities/User';
import type { RootState } from '../store';

interface UserState {
  value?: User;
}

const initialState: UserState = {
  value: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectCount = (state: RootState) => state.user.value;

export default userSlice.reducer;
