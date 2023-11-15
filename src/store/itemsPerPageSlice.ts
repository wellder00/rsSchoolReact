import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type itemsAmountState = {
  items: string;
};

const initialState: itemsAmountState = {
  items: '10',
};

const itemsAmountSlice = createSlice({
  name: 'itemsAmount',
  initialState,
  reducers: {
    changeItemsAmount(state, action: PayloadAction<string>) {
      state.items = action.payload;
    },
  },
});

export const { changeItemsAmount } = itemsAmountSlice.actions;

export default itemsAmountSlice.reducer;
