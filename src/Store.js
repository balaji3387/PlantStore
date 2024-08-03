import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx';

 const store = configureStore({
    reducer: cartReducer,
});
export default store