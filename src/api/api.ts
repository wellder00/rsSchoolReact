import { RickAndMortyAPI } from '../utils/constants/api';

export async function getRickAndMortyData(category: string) {
  try {
    const response = await fetch(`${RickAndMortyAPI}/${category.toLowerCase()}`);
    if (!response.ok) {
      throw new Error('ERROR HTTP: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Request ERROR:', error);
  }
}
