import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import Item from './Item';

export function Cart() {
  const dispatch = useDispatch('');
  const [discount, setDiscount] = useState('');
  const [numerical, setNumerical] = useState(0);
  


  const atc = id => dispatch(addToCart(id));
  const rfc = id => dispatch(removeFromCart(id));

  const cart = useSelector(store => store.cart);
  // const items = useSelector(store => store.items);
  
  const clientTotal = cart.reduce((acc, cv) => acc += cv.price * cv.quantity, 0);

  const handleSubmit = e => {
    e.preventDefault();
    if (discount.match(/^REMOVE((10)|(20)|(30))$/)) setNumerical(discount.slice(-2) / 100);
  }

  const handleChange = e => {
    const { value } = e.target;
    setDiscount(value);
  }
  return (
    <div>
      {cart.map(item => (<div>
        <Item
          handleAdd={atc}
          handleRemove={rfc}
          item={item}
        />
       
      </div>
      ))}
      <div>Total: ${clientTotal}</div>
      <div>Taxes: 6.5%</div>
      <div>Discount: {numerical * 100}%</div>
      <div>SubTotal: ${(clientTotal * (1 - numerical)) * 1.065}</div>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor>Discount</label>
        <input type="text" name="discount" value={discount} onChange={handleChange} />
      </form> 
    </div>
  )
}


