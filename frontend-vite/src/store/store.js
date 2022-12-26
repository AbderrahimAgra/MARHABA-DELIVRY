import { configureStore } from '@reduxjs/toolkit'
import cartSclice from './slices/cart.sclice'

export default configureStore({
  reducer: {
    cart: cartSclice
  }
})