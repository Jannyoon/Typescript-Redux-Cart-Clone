import React from 'react';
import { getCartSelector, getTotalPrice, removeFromCart } from './cart.slice';
import { useAppDispatch, useAppSelector } from '../Store/store.hooks';

interface CartProps {

}

export const Cart : React.FC<CartProps> = () => {
  const totalPrice = useAppSelector(getTotalPrice);
  const cartProducts = useAppSelector(getCartSelector);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (productId : string) => dispatch(removeFromCart(productId));
  

  return (
    <>
      <h2>Cart</h2>
      <h5>{totalPrice}</h5>
      {cartProducts.map(product => (
        <div key={product.id}>
          <span>{product.title}</span>
          <span>{product.amount}</span>
          <button onClick={()=>handleRemoveFromCart(product.id)}>Remove from cart</button>
        </div>
      ))}
    </>
  );
}

