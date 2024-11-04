import React, { useState } from 'react';
import { Product } from './Products.slice';

const ProductForm : React.FC = () => {
  const [{title, price, id}, setProduct] = useState<Product>({
    id : '',
    title : '',
    price : 0
  });

  console.log("확인용", title, price, id);

  const handleChange = ({target:{name, value}}:React.ChangeEvent<HTMLInputElement>) =>{
    setProduct(prev =>{
      (prev as any)[name] = value;
      //prev[name] = value; 
      const newValue = {...prev};
      return newValue;
    })

  }
  return (
    <>
      <h2>Add Game To The Store</h2>
      <form>
        <input type="text" placeholder='Game title' name="title" value={title} onChange={handleChange}/>
        <input type="number" placeholder='Price' name="price" value={price} onChange={handleChange}/>
        <input type="text" placeholder='id' name="id" value={id} onChange={handleChange}/>
        <button>Add price</button>
      </form>
    </>
  );
}

export default ProductForm;

