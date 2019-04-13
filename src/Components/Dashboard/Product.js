import React from 'react';
import './Product.css';

let Product = ({ product, deleteProductFunc, selectProductFunc }) => {
  console.log(`product:`, product);
  return (
    <div className="product">
      <img src={product.img} alt="product" />
      <div>
        <h2>Name: {product.name}</h2>
        <h2>Product: {product.price}</h2>
        <div>
          <button onClick={() => selectProductFunc(product.id)}>Edit</button>
          <button onClick={() => deleteProductFunc(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
