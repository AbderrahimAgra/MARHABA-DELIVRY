import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
   items: [],
   isOpen: false
},
  reducers: {
    addItem: (state, action) => {
        if( state.items.find(e => e._id === action.payload._id)) return state
        return {...state,items:[...state.items,action.payload]}
    },
    toggleCard : (state) => {
        return {...state,isOpen: !state.isOpen}
    },
    setItemQuantity: (state, action) => {
        if(action.payload < 0) return state
        return {...state, items: state.items.map(item => {return item._id === action.payload._id ? {...item, quantity:action.payload.quantity}:item})}
    }
  },
})

export const { addItem, toggleCard, setItemQuantity} = cartSlice.actions

export const selectCart = (state) => state.cart.items
export const selectIsOpen = state => state.cart.isOpen

export default cartSlice.reducer