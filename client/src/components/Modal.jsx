import React from 'react';

export default function Modal({ product }) {
  return (
    <div className='product-modal-background'>
      <div className='product-modal'>
        <h3>{ product.name }</h3>
        { product.description }
      </div>
    </div>
  )
};
