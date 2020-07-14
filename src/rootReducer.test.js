import rootReducer from './rootReducer';
import { DISPLAY_ITEMS, ATC, RFC } from './actionTypes';
import ITEMS from './data.json';

it('should be functions', () => {
  expect(typeof rootReducer).toEqual('function');
})

it('should return correct action object', () => {
  //arr of product keys
  const prodKeys = Object.keys(ITEMS.products)
  const items = prodKeys.reduce((acc, cv) => {
    acc.push({ ...ITEMS.products[cv], id: cv });
    return acc;
  }, []);

  const INITIAL_STATE = { items, cart: [] };
  expect(rootReducer(INITIAL_STATE, { type: DISPLAY_ITEMS })).toEqual(INITIAL_STATE);

  const newId = "47314fa1-ae56-4eae-80be-af6691145951"
  expect(rootReducer(INITIAL_STATE, {
    type: ATC,
    payload: newId
  })).toEqual({ ...INITIAL_STATE, cart: [newId] });

  const currId = "47314fa1-ae56-4eae-80be-af6691145951";
  const NEW_STATE = { items, cart: []}
  expect(rootReducer(NEW_STATE, {
    type: RFC,
    payload: currId
  })).toEqual({ ...NEW_STATE, cart: [] });
})