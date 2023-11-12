import image from '../../assets/images/teleportTop.png';

export const ditto = {
  id: 8,
  name: 'ditto',
  weight: 40,
  species: {
    name: 'fire',
  },
  sprites: {
    front_shiny: image,
  },
};

const pokemons = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  },
  {
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
  },
];

export const pokemonData = {
  count: 21,
  next: 'asd',
  previous: 'null',
  results: pokemons,
};
