import {displayItems, addToCart, removeFromCart} from './actions';

it('should be functions', () => {
  expect(typeof displayItems).toEqual('function');
  expect(typeof addToCart).toEqual('function');
  expect(typeof removeFromCart).toEqual('function');
})

it('should return correct action object', () => {
  expect(displayItems()).toEqual({type: 'DISPLAY_ITEMS'});
  expect(addToCart('xyz')).toEqual({type: 'ATC', payload: 'xyz'});
  expect(removeFromCart('xyz')).toEqual({type: 'RFC', payload: 'xyz'});
})