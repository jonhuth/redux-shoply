import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addToCart, removeFromCart} from './actions';

function SpecificItem() {
  const { id: urlId } = useParams();
  const item = useSelector(store => store.items
    .filter(item => item.id === urlId));
  const { id, name, price, description, image_url } = item[0];

  const dispatch = useDispatch();
  const atc = id => dispatch(addToCart(id))
  const rfc = id => dispatch(removeFromCart(id))
  return (
    <div>
      <Link to='/'>Go back to products</Link>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{description}</p>
      <img src={image_url} alt={name} style={{ width: '100px', height: '100px' }} />
      <button onClick={() => atc(id)}>Add to Cart</button>
      <button onClick={() => rfc(id)}>Remove from Cart</button>
    </div>
  )

}
export default SpecificItem;