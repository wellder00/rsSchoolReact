import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { countryApi } from '../utils/constants/api';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: countryApi }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => 'all',
      transformResponse: (response: { name: { common: string } }[]) =>
        response.map((country) => ({ name: country.name.common })),
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
