import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './template.slice';

const store = configureStore({
  reducer: {
    template: templateSlice
  }
});

export default store;
