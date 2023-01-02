import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CreateRanobeResponse {
    message: string;
}

export interface GetChapterResponse {
    id: string;
    title: string;
    volume: number;
    number: number;
    text: string;
    createdAt: string;
    ranobeId: string;
    authorId: string;
}

interface GetRanobesRequest {
    take: number;
    skip?: number;
    orderByUpdated?: 'asc' | 'desc';
    orderByCreated?: 'asc' | 'desc';
}

interface CreateRanobeRequest {
    title: string;
    description: string;
    categories: string[];
}

export const chapterApi = createApi({
    reducerPath: 'api/chapters',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/chapters'
    }),
    endpoints: (builder) => {
        return {
            // createRanobe: builder.mutation<CreateRanobeResponse, CreateRanobeRequest>({
            //     query: (data) => ({
            //         url: 'create',
            //         method: 'POST',
            //         body: data,
            //         credentials: 'include'
            //     })
            // }),
            getChaptersOfRanobe: builder.query<GetChapterResponse[], string>({
                query(id) {
                    return {
                        url: `/ranobe/${id}`
                    };
                }
            }),
            getChapter: builder.query<GetChapterResponse, string>({
                query: (id) => ({
                    url: `/${id}`
                })
            }),
            getChaptersByUser: builder.query<GetChapterResponse[], any>({
                query: () => ({
                    url: '/my/list',
                    credentials: 'include'
                })
            })
        };
    }
});

export const {  useGetChapterQuery, useGetChaptersOfRanobeQuery, useGetChaptersByUserQuery } = chapterApi;
