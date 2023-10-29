import { Character, Info } from '../types/interfaces';
import { RickAndMortyAPI } from '../utils/constants/api';

export async function getRickAndMortyData(
  character: string | number
): Promise<Info<Character> | null> {
  try {
    if (character === '') {
      localStorage.setItem('character', JSON.stringify(character));
      const response = await fetch(RickAndMortyAPI);
      if (!response.ok) {
        throw new Error('ERROR HTTP: ' + response.status);
      }
      const data = await response.json();
      return data;
    } else if (isNaN(parseInt(character as string))) {
      localStorage.setItem('character', JSON.stringify(character));
      const response = await fetch(
        `${RickAndMortyAPI}/?name=${(character as string).toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error('ERROR HTTP: ' + response.status);
      }
      const data = await response.json();
      return data;
    } else {
      const response = await fetch(`${RickAndMortyAPI}/${character}`);
      if (!response.ok) {
        throw new Error('ERROR HTTP: ' + response.status);
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Request ERROR:', error);
    return null;
  }
}
