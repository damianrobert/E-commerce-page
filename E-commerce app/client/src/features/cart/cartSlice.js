import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state) => {
      state.amount += 1;
    },

    decrease: (state) => {
      if (state.amount > 0) {
        state.amount -= 1;
      }
    },

    clearCart: (state) => {
      state.amount = 0;
    },
  },
});

//console.log(cartSlice);
export const { increase, decrease, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
