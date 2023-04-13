import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  console.log(cart);


  let total=0;
  let totalShipping=0;
  for(const product of cart){
    total=total+product.price
    totalShipping=totalShipping+product.shipping
  }

  const tax=total*7/100;
  const grandTotal= total+ totalShipping+tax;
  return (
    <div className='cart'>
      <h4>Order summary</h4>
      <h5>Item: {cart.length}</h5>
      <h4>price:${total}</h4>
      <p>Total shopping:{totalShipping}</p>
      <p>Tax:${tax}</p>
      <p>Grand Total:{grandTotal}</p>
    </div>
  );
};

export default Cart;