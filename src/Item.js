import React from 'react';
import {Link} from 'react-router-dom';

function Item({ item, handleAdd, handleRemove }) {
  const { id, name, price, description, image_url, quantity } = item;
  const usdHelper = (q, p) => {
    let em = Number(q * p);
    return em.toFixed(2);
  }

  return (
    <div>
      <h1><Link to={`/products/${id}`}>{name}</Link></h1>
      <p>{description}</p>
      {quantity && <div>Quantity: {quantity} /  Price: {price} / Total: ${usdHelper(quantity, price)}</div>}
      
      <img src={image_url} alt={name} style={{width: '100px', height: '100px'}} />
      <button onClick={() => handleAdd({ id, price, quantity: 1, image_url })}>Add to Cart</button>
      <button onClick={() => handleRemove({ id })}>Remove from Cart</button>
      
    </div>
  )

}
export default Item;