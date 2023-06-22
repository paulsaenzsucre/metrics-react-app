import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => '/all',
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
const { useGetCountriesQuery } = apiSlice;

export {
  useGetCountriesQuery as default,
  apiSlice,
};
