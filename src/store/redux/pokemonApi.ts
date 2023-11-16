import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pokemonAPI1 } from '../../utils/constants/api';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: pokemonAPI1 }),
  endpoints: (build) => ({
    getPokemons: build.query({
      query: ({ limit = '', offset = '' }) =>
        `pokemon?${limit && `limit=${limit}`}&${offset && `offset=${offset}`}`,
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;
