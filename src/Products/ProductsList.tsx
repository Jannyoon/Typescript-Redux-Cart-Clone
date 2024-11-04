import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getProductsSelector } from './Products.slice';

interface ProductsListProps {
}


const ProductsList : React.FC<ProductsListProps> = ({}) => {
  const products = useSelector(getProductsSelector);
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

  return (
    <div>
      <h2>Games List</h2>
      {products.map(product => <div key={product.id}>
        <span>{`${product.title} : ${product.price}`}</span>
      </div>)}

      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default ProductsList
