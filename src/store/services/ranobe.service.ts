import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CreateRanobeResponse {
    message: string;
}

export interface GetRanobeResponse {
    id: string;
    title: string;
    description: string;
    status: 'ONGOING' | 'COMPLETED';
    tStatus: 'ONGOING' | 'COMPLETED';
    image: null;
    categoryIDs: string[];
    categories: { name: string }[];
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
    views: number;
}

interface GetRanobesRequest {
    take: number;
    skip?: number;
    orderByUpdated?: 'asc' | 'desc';
    orderByCreated?: 'asc' | 'desc';
    orderByViews?: 'asc' | 'desc';
}

interface CreateRanobeRequest {
    title: string;
    description: string;
    categories: string[];
}

export const ranobeApi = createApi({
    reducerPath: 'api/ranobes',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/ranobes'
    }),
    endpoints: (builder) => {
        return {
            createRanobe: builder.mutation<CreateRanobeResponse, CreateRanobeRequest>({
                query: (data) => ({
                    url: 'create',
                    method: 'POST',
                    body: data,
                    credentials: 'include'
                })
            }),
            getRanobes: builder.query<GetRanobeResponse[], GetRanobesRequest>({
                query({ take, skip, orderByUpdated, orderByCreated, orderByViews }) {
                    const pSkip = skip ? `&skip=${skip}` : '';
                    const pOrderByUpdated = orderByUpdated ? `&orderByUpdated=${orderByUpdated}` : '';
                    const pOrderByCreated = orderByCreated ? `&orderByCreated=${orderByCreated}` : '';
                    const pOrderByViews = orderByViews ? `&orderByViews=${orderByViews}` : '';

                    return {
                        url: `/?take=${take}${pSkip}${pOrderByCreated}${pOrderByUpdated}${pOrderByViews}`
                    };
                }
            }),
            getRanobe: builder.query<GetRanobeResponse, string>({
                query: (id) => ({
                    url: `/${id}`
                })
            }),

            getRanobesByUser: builder.query<GetRanobeResponse[], any>({
                query: () => ({
                    url: '/my/list',
                    credentials: 'include'
                })
            })
        
        };
    }
});

export const { useCreateRanobeMutation, useGetRanobesQuery, useGetRanobeQuery, useGetRanobesByUserQuery } = ranobeApi;
