import { Pokemons } from '@/types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PokemonValueState = {
  pokemons: Pokemons[];
};

const initialState: PokemonValueState = {
  pokemons: [],
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    savePokemons(state, action: PayloadAction<Pokemons[]>) {
      state.pokemons = action.payload;
    },
  },
});

export const { savePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
