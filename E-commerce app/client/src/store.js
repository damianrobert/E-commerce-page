import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import accountReducer from "./features/Account/logedSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    account: accountReducer,
  },
});
