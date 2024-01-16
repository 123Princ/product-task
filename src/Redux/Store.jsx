import { configureStore } from '@reduxjs/toolkit' 
import Cart from "../Redux/CartSlice"
export const store = configureStore({
  reducer: {
    Cart,
  },
  devTools:true
})