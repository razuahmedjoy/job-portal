import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ENUM_TAG_TYPES } from './tagTypes';

const apiBaseUrl = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: apiBaseUrl,
        prepareHeaders: async (headers, { getState }) => {
            const token = getState()?.auth?.accessToken;
            token && headers.set("Authorization", `Bearer ${token}`)
            return headers;
        }
    }),
    tagTypes: [
        ...Object.values(ENUM_TAG_TYPES)
    ],
    endpoints: () => ({}),
})