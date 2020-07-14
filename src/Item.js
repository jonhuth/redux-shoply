import React from 'react';
import {Link} from 'react-router-dom';

function Item({ item, handleAdd, handleRemove}) {
  const { id, name, price, description, image_url } = item;
  return (
    <div>
      <h1><Link to={`/products/${id}`}>{name}</Link></h1>
      <p>{price}</p>
      <p>{description}</p>
      <img src={image_url} alt={name} style={{width: '100px', height: '100px'}} />
      <button onClick={() => handleAdd(id)}>Add to Cart</button>
      <button onClick={() => handleRemove(id)}>Remove from Cart</button>
    </div>
  )

}
export default Item;