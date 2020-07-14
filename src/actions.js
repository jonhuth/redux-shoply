import {DISPLAY_ITEMS, ATC, RFC} from './actionTypes';

export function displayItems() { // might not need but if we add filtering could be useful
  return {
    type: DISPLAY_ITEMS
  };
}
export function addToCart(payload) {
  return {
    type: ATC,
    payload
  };
}
export function removeFromCart(payload) {
  return {
    type: RFC,
    payload
  };
}