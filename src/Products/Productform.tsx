import React, { useState } from 'react';
import { addProduct, Product } from './Products.slice';
import { useAppDispatch } from '../Store/store.hooks';

const ProductForm : React.FC = () => {
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<Product>({
    id : '',
    title : '',
    price : 0
  });
  const {title, price, id} = product;
  console.log("확인용", title, price, id);

  const handleChange = ({target:{name, value}}:React.ChangeEvent<HTMLInputElement>) =>{
    setProduct(prev =>{
      (prev as any)[name] = value;
      const newValue = {...prev};
      return newValue;
    })
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    dispatch(addProduct(product));
  }

  return (
    <>
      <h2>Add Game To The Store</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Game title' name="title" value={title} onChange={handleChange}/>
        <input type="number" placeholder='Price' name="price" value={price} onChange={handleChange}/>
        <input type="text" placeholder='id' name="id" value={id} onChange={handleChange}/>
        <button type="submit">Add price</button>
      </form>
    </>
  );
}

export default ProductForm;

