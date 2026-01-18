import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './src/features/cart/cartSlice.js';
import modalReducer from './src/features/modal/modalSlice.js';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		modal: modalReducer,
	},
});
