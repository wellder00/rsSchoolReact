import { configureStore } from '@reduxjs/toolkit';
import inputValueReducer from './slices/inputValueSlice';
import itemsAmountReducer from './slices/itemsPerPageSlice';
import { pokemonApi } from '../services/pokemonApi';

const store = configureStore({
  reducer: {
    inputValue: inputValueReducer,
    itemsAmount: itemsAmountReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
