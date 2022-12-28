import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../types/IUser';

interface UserResponse {
  token: string;
  user: IUser;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export const authApi = createApi({
  reducerPath: 'api/auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/auth'
  }),
  endpoints: (builder) => {
    return {
      register: builder.mutation<any, RegisterRequest>({
        query: (data) => ({
          url: 'register',
          method: 'POST',
          body: data
        })
      }),
      login: builder.mutation<UserResponse, LoginRequest>({
        query: (data) => ({
          url: 'login',
          method: 'POST',
          body: data,
          credentials: 'include'
        }),
        async onQueryStarted(arqs, { dispatch, queryFulfilled }) {
          try {
            const {data} = await queryFulfilled;
            dispatch(authApi.endpoints.profile.initiate({}));
            
          } catch (e) {
            console.log(e)
          }
        }
      }),
      profile: builder.query<IUser, any>({
        query() {
          return {
            url: 'profile',
            credentials: 'include'
          };
        }
      }),
      logout: builder.mutation<void, void>({
        query() {
          return {
            url: 'logout',
            credentials: 'include'
          };
        }
      })
    };
  }
});

export const { useLoginMutation, useRegisterMutation, useProfileQuery } = authApi;
