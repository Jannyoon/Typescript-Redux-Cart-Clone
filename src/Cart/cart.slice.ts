import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Product } from './../Products/Products.slice';
import { RootState } from "@reduxjs/toolkit/query";

/*
export interface Product {
  title: string;
  price: number;
  id: string;
}
*/

interface CartProduct extends Product {
  amount : number
}

const initialState : CartProduct[] = [];
const cartSlice = createSlice({
  name : 'cart',
  initialState, //initialState : [] as CartProduct[]
  reducers : {
    addToCart : (state, action : PayloadAction<Product>) => {
        const productIndex = state.findIndex(product => product.id === action.payload.id);
        console.log("productIndex 추가?", productIndex);
        if (productIndex !== -1){
          //이미 존재할 경우
          state[productIndex].amount += 1;
        } else {
          state.push({...action.payload, amount : 1})
        }
    },
    removeFromCart : (state, action : PayloadAction<string>) => {
      const productIndex = state.findIndex(product => product.id === action.payload);
      if (state[productIndex].amount > 1){
        state[productIndex].amount-=1;
      } else {
        return state.filter(product => product.id!==action.payload);
      }
    }
  }
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart} = cartSlice.actions;
export const getCartSelector = (state : RootState) => state.cart;
export const getTotalPrice = (state : RootState) => state.cart.reduce((acc,next) => acc+(next.amount * next.price),0)
// {title : "Escape From Tarkov", price : 60, id:'eft'},

//[{title : 'Cyberpunk', amount : }]