import { type CaseReducer, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Template } from '../interfaces/template';

export const initialState: Template = {
  design: 'classic'
};

const setTemplate: CaseReducer<Template, PayloadAction<Template>> = 
  (state: Template, action: PayloadAction<Template>) => {
    state.design = action.payload.design;
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: { setTemplate }
});

export const templateActions = templateSlice.actions;
export default templateSlice.reducer;
