import { configureStore } from '@reduxjs/toolkit';
import dataFormReducer from './dataFormSlice';
import { countriesApi } from './counterApi';

const store = configureStore({
  reducer: {
    dataForm: dataFormReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
