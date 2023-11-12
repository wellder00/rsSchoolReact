import { http, HttpResponse } from 'msw';
import { pokemonAPI } from '../../../../utils/constants/api';
import { pokemonData } from '../../PokemonData1';

export const character = [
  http.get(`${pokemonAPI}`, () => {
    return HttpResponse.json(pokemonData);
  }),
];
