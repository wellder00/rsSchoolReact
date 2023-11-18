import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pokemonAPI } from '../../utils/constants/api';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: pokemonAPI }),
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

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi;
