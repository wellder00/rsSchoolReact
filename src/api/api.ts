import axios from 'axios';

import { pokemonAPI } from '../utils/constants/api';

export async function getPokemon(pokemon: string, offset?: number, limit?: number) {
  try {
    console.log(offset, limit);
    if (pokemon === '') {
      localStorage.setItem('pokemon', JSON.stringify(pokemon));
      const response = await axios.get(pokemonAPI);
      return response.data;
    } else {
      localStorage.setItem('pokemon', JSON.stringify(pokemon));
      const response = await axios.get(`${pokemonAPI}/${pokemon}`);
      return response.data;
    }
  } catch (error) {
    console.error('Request ERROR:', error);
    return null;
  }
}
