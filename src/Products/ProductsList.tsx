import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Product, removeProduct } from './Products.slice';
import { getProductsSelector } from './Products.slice';
import { useAppDispatch, useAppSelector } from '../Store/store.hooks';
import { addToCart } from '../Cart/cart.slice';

interface ProductsListProps {
}


const ProductsList : React.FC<ProductsListProps> = () => {
  const products = useAppSelector(getProductsSelector);
  const dispatch = useAppDispatch();

  const removeFromStore = (id : string) => dispatch(removeProduct(id));
  const addToCartHandler = (product : Product)=> dispatch(addToCart(product));

  /*
    const handleAddProduct = ()=>{
      setProducts(prevProducts => [
        ...prevProducts, 
        {
          title : 'Half Life',
          price : 100,
          id : 'hl'
        }
      ])
    }
  */

  return (
    <div>
      <h2>Games List</h2>
      {products.map(product => 
      (<div key={product.id}>
        <span>{`${product.title} : ${product.price}`}</span>
        <button onClick={()=>addToCartHandler(product)}>Add To Cart</button>
        <button onClick={()=>removeFromStore(product.id)}>Remove from the store</button>
      </div>)
      )}

      <button>Add Product</button>
    </div>
  );
}

export default ProductsList
