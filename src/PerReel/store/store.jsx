import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartStuff';
import counterSlice from './Counter';
import ProductApi from './ProductApi';

const store = configureStore({
  reducer: {
    holdCart: cartSlice,
    Counter: counterSlice,
    products: ProductApi,
  },
});

export default store;
