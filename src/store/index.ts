import { configureStore } from '@reduxjs/toolkit';
import inputValueReducer from './inputValueSlice';
import itemsAmountReducer from './itemsPerPageSlice';

const store = configureStore({
  reducer: {
    inputValue: inputValueReducer,
    itemsAmount: itemsAmountReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
