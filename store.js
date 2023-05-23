import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './fetatures/basketSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
