import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const pokemonAPI = process.env.API_URL;

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: pokemonAPI }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],

  endpoints: (build) => ({
    getPokemons: build.query({
      query: ({ pokemon = '', limit = '', offset = '' }) => {
        if (pokemon) {
          return `pokemon/${pokemon}`;
        } else return `pokemon/?${limit && `limit=${limit}`}&${offset && `offset=${offset}`}`;
      },
    }),
    getPokemon: build.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useGetPokemonQuery,
  util: { getRunningQueriesThunk },
} = pokemonApi;

export const { getPokemons, getPokemon } = pokemonApi.endpoints;
