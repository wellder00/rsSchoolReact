import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/pokemonApi';
import inputValueReducer from './slices/inputValueSlice';
import itemsAmountReducer from './slices/itemsPerPageSlice';
import savePokemonsReducer from './slices/savePokemons';
import { createWrapper } from 'next-redux-wrapper';

export const createStore = () =>
  configureStore({
    reducer: {
      inputValue: inputValueReducer,
      itemsAmount: itemsAmountReducer,
      savePokemons: savePokemonsReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
  });

export default createStore;

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(createStore, { debug: true });

export const store = createStore();
