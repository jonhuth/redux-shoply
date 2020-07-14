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
    case DISPLAY_ITEMS:
      return state
    case ATC:
      return {...state, cart: [...state.cart, action.payload]} //payload corresponds to id
    case RFC:
      return {...state, cart: state.cart.filter(id => id !== action.payload)}
    default:
      return state
  }
}

export default rootReducer;