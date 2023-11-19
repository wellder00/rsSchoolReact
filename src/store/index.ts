import { configureStore } from '@reduxjs/toolkit';
import inputValueReducer from './inputValueSlice';
import itemsAmountReducer from './itemsPerPageSlice';
import { pokemonApi } from './redux/pokemonApi';

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
