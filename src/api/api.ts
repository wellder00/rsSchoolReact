import axios from 'axios';

import { pokemonAPI } from '../utils/constants/api';

export async function getPokemon(pokemon: string, offset?: number, limit?: number) {
  try {
    console.log(offset, limit);
    if (pokemon === '') {
      console.log(offset, limit);
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
  } catch (error) {
    console.error('Request ERROR:', error);
    return null;
  }
}
