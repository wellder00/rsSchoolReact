import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InputValueState = {
  value: string;
};

const initialState: InputValueState = {
  value: '',
};

const pokemonSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    saveItemValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { saveItemValue } = pokemonSlice.actions;

export default pokemonSlice.reducer;
