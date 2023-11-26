export type Pokemons = {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: string;
};

export interface stats {
  stat: {
    name: string;
  };
  base_stat: string;
}

export interface Pokemon extends Omit<Pokemons, 'sprites'> {
  species: { name: string };
  stats: stats[];
  sprites: { front_shiny: string };
}
