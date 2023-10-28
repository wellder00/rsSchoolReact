export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface Endpoints {
  character: string;
  location: string;
  episode: string;
}

export interface CharacterFilter {
  name?: string;
  type?: string;
  species?: string;
  status?: string;
  gender?: string;
  page?: number;
}

export interface Character extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface ApiResponse<T> {
  status: number;
  statusMessage: string;
  data: T;
}

export interface Info<Character> {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: Character[];
}
