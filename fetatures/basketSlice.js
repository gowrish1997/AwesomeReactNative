import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  basketItems: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItems: (state, actions) => {
      state.basketItems = [...state.basketItems, actions.payload];
    },
    removeItem: (state, actions) => {
      state.basketItems = 1;
    },
  },
});

export const {addItems, removeItem} = basketSlice.actions;

export default basketSlice.reducer;
