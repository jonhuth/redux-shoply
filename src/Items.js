import React from 'react';
import {displayItems, addToCart, removeFromCart} from './actions';
import Item from './Item';
// import uuid from 'uuid/v4'; might not need
import { useSelector, useDispatch } from 'react-redux';

function Items() {
  const items = useSelector(store => store.items);
  const dispatch = useDispatch();

  const atc = id => dispatch(addToCart(id))
  const rfc = id => dispatch(removeFromCart(id))

  return (
    <div>
      {items.map(item => <Item 
      handleAdd={atc}
      handleRemove={rfc}
      item={item}
       />)}
    </div>
  )

}
export default Items;