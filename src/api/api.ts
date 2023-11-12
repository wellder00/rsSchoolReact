import axios from 'axios';
import { pokemonAPI } from '../utils/constants/api';

export async function getPokemon(pokemon: string, offset?: number, limit?: number) {
  try {
    let url = pokemonAPI;

    if (offset !== undefined && limit !== undefined) {
      url = `${pokemonAPI}?limit=${limit}&offset=${offset}`;
    } else if (pokemon !== '') {
      url = `${pokemonAPI}/${pokemon}`;
    }

    localStorage.setItem('pokemon', JSON.stringify(pokemon));

    const response = await axios.get(url);

    if (offset !== undefined && limit !== undefined) {
      return response.data;
    } else if (pokemon !== '') {
      const pokemonInfo = {
        results: [response.data],
      };
      return pokemonInfo;
    }

    return response.data;
  } catch (error) {
    console.error('Request ERROR:', error);
    return null;
  }
}
