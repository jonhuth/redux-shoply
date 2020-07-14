import { DISPLAY_ITEMS, ATC, RFC } from './actionTypes';
import ITEMS from './data.json';

//arr of product keys
const prodKeys = Object.keys(ITEMS.products);
const items = prodKeys.reduce((acc, cv) => {
  acc.push({...ITEMS.products[cv], id: cv});
  return acc;
}, []);
const INITIAL_STATE = { items, cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // not necessary now TODO
    case ATC:
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {
          let newQuantity = { ...state.cart[i], quantity: state.cart[i].quantity + 1 };
          let cart = state.cart.map(el => el.id === newQuantity.id ? newQuantity : el);
          return { ...state, cart}
        }
      }
      return { ...state, cart: [...state.cart, action.payload] };
       //payload corresponds to id
    case RFC:
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {

          let newQuantity = { ...state.cart[i], quantity: state.cart[i].quantity - 1 };
          let cart = state.cart.map(el => el.id === newQuantity.id ? newQuantity : el);
          if (newQuantity.quantity === 0) {
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) }
          }
          return { ...state, cart }
        }
      }
      return state;
    default:
      return state
  }
}

export default rootReducer;