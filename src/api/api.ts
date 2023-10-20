import { RickAndMortyAPI } from '../utils/constants/api';

export async function getRickAndMortyData(character: string) {
  try {
    if (character === '') {
      const response = await fetch(RickAndMortyAPI);
      if (!response.ok) {
        throw new Error('ERROR HTTP: ' + response.status);
      }
      const data = await response.json();
      localStorage.setItem('rickAndMortyData', JSON.stringify(data));
      return data;
    } else {
      const response = await fetch(`${RickAndMortyAPI}/?name=${character.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('ERROR HTTP: ' + response.status);
      }
      const data = await response.json();
      localStorage.setItem('rickAndMortyData', JSON.stringify(data));
      return data;
    }
  } catch (error) {
    console.error('Request ERROR:', error);
  }
}
