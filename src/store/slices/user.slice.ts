import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/IUser';
import { authApi } from '../services/auth.service';
import { cookies } from 'next/headers';

interface IUserState {
  user: IUser | null;
  isLogged: boolean;
}

const initialState: IUserState = {
  user: null,
  isLogged: false,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: (state) => {
      state.isLogged = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.profile.matchFulfilled, (state, { payload }) => {
      
      state.user = payload;
      state.isLogged = true;
    });
  }
});

export default userSlice.reducer;

export const { logout } = userSlice.actions;
