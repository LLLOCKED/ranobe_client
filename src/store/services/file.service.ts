import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fileApi = createApi({
    reducerPath: 'api/file',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/uploads/image'
    }),
    endpoints: (builder) => {
        return {
            getCoverRanobe: builder.query<any, any>({
                query: (name) => ({
                    url: `/${name}`
                })
            })
        };
    }
});

export const { useGetCoverRanobeQuery } =fileApi;
