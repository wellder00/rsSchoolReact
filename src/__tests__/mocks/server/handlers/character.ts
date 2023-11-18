import { http, HttpResponse } from 'msw';
import { pokemonAPI } from '../../../../utils/constants/api';
import { ditto, pokemonData } from '../../PokemonData1';

export const character = [
  http.get(`${pokemonAPI}`, () => {
    return HttpResponse.json(pokemonData);
  }),
  http.get(`${pokemonAPI}/:id`, () => {
    return HttpResponse.json(ditto);
  }),
];
