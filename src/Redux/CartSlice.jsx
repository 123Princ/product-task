import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
const initialState = {
    carts:[],
    order :[],
    loading :false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.carts?.push(action.payload)
            toast.success('Product added to cart successfully!');

        },
        OrderNow(state, action) {
            const updatedOrder = [...state.order, action.payload];
            const updatedCarts = [];
          
            // Assuming you want to clear carts on successful order
            toast.success('Order successfully!');
          
            // Return a new state object
            return {
              ...state,
              order: updatedOrder,
              carts: updatedCarts
            };
          },
        deleteFromCart(state, action) {
            const updatedCarts  = state.carts?.filter(item => item.id != action.payload);
            toast.success('Product Delect to cart successfully!');

            return {
                ...state,
                carts: updatedCarts
              };
        }
    }
})

export const { addToCart, deleteFromCart,OrderNow } = cartSlice.actions

export default cartSlice.reducer;