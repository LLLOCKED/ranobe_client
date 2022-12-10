import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../types/IUser';

interface UserResponse {
  user: IUser;
}

export const authApi = createApi({
  reducerPath: 'api/',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/auth'
  }),
  endpoints: (builder) => {
    return {

    };
  }
});

export const { } = authApi;
