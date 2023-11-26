import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type itemsAmountState = {
  itemsAmount: string;
  offset: string;
  currentPage: string;
  lastPage: string;
  count: string;
};

const initialState: itemsAmountState = {
  itemsAmount: '3',
  offset: '0',
  currentPage: '1',
  lastPage: '',
  count: '',
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
    changeCount(state, action: PayloadAction<string>) {
      state.count = action.payload;
    },
  },
});

export const {
  changeItemsAmount,
  changeOffsetAmount,
  changeCurrentPage,
  changeLastPage,
  changeCount,
} = itemsAmountSlice.actions;

export default itemsAmountSlice.reducer;
