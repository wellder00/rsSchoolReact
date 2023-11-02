export interface PokemonData {
  name: string;
  weight: number;
  species: string;
  sprites: string;
}

export interface Person {
  name: string;
  url?: string;
  id: number;
  weight: number;
  species?: { name: string };
  sprites?: { front_shiny: string };
}

export interface Pokemon extends Omit<Person, 'species' | 'sprites'> {
  species: string;
  sprites: string;
}

export interface Info<T> {
  count: string;
  next: string | null;
  previous: string | null;
  results: T[];
}
