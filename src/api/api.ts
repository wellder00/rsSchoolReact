import axios from 'axios';

import { pokemonAPI } from '../utils/constants/api';

export async function getPokemon(pokemon: string, offset?: number, limit?: number) {
  try {
    if (offset !== undefined || (null && limit !== undefined) || null) {
      localStorage.setItem('pokemon', JSON.stringify(pokemon));
      console.log(`${pokemonAPI}?limit=${limit}&offset=${offset}`);
      const response = await axios.get(`${pokemonAPI}?limit=${limit}&offset=${offset}`);
      return response.data;
    } else {
      if (pokemon === '') {
        localStorage.setItem('pokemon', JSON.stringify(pokemon));
        const response = await axios.get(pokemonAPI);
        return response.data;
      } else {
        localStorage.setItem('pokemon', JSON.stringify(pokemon));
        const response = await axios.get(`${pokemonAPI}/${pokemon}`);
        const pokemonInfo = {
          results: [response.data],
        };
        return pokemonInfo;
      }
    }
  } catch (error) {
    console.error('Request ERROR:', error);
    return null;
  }
}
