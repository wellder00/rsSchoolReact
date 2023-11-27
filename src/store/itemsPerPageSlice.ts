import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type itemsAmountState = {
  itemsAmount: string;
  offset: string;
  currentPage: string;
  lastPage: string;
};

const initialState: itemsAmountState = {
  itemsAmount: '10',
  offset: '0',
  currentPage: '1',
  lastPage: '',
};

const itemsAmountSlice = createSlice({
  name: 'itemsAmount',
  initialState,
  reducers: {
    changeItemsAmount(state, action: PayloadAction<string>) {
      state.itemsAmount = action.payload;
    },
    changeOffsetAmount(state, action: PayloadAction<string>) {
      state.offset = action.payload;
    },
    changeCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
    changeLastPage(state, action: PayloadAction<string>) {
      state.lastPage = action.payload;
    },
  },
});

export const { changeItemsAmount, changeOffsetAmount, changeCurrentPage, changeLastPage } =
  itemsAmountSlice.actions;

export default itemsAmountSlice.reducer;
