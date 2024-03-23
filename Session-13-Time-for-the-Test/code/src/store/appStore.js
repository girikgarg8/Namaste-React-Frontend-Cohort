import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";

export const reducer = combineReducers({
  cart: cartReducer,
});

const appStore = configureStore({ reducer });

export default appStore;
