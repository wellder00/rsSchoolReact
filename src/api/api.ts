import { Character, Info } from '../types/interfaces';
import { RickAndMortyAPI } from '../utils/constants/api';

export async function getRickAndMortyData(character: string): Promise<Info<Character> | null> {
  try {
    if (character === '') {
      localStorage.setItem('character', JSON.stringify(character));
      const response = await fetch(RickAndMortyAPI);
      if (!response.ok) {
        throw new Error('ERROR HTTP: ' + response.status);
      }
      const data = await response.json();
      return data;
    } else {
      localStorage.setItem('character', JSON.stringify(character));
      const response = await fetch(`${RickAndMortyAPI}/?name=${character.toLowerCase()}`);
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
