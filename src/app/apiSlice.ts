import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api',
    credentials: 'include',
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
});
// remove builder from endpoints prop
