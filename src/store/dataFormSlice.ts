import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormSliceState, UpdatedForm } from 'types/interface';

const initialState: FormSliceState = {
  forms: [],
};

const dataFormSlice = createSlice({
  name: 'dataForm',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<UpdatedForm>) {
      state.forms = [...state.forms, action.payload];
    },
  },
});

export const { addFormData } = dataFormSlice.actions;
export default dataFormSlice.reducer;
