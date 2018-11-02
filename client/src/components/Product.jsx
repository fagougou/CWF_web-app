import React from 'react';

export default function Product({ description, name, price, img, onClick, id }) {
  return (
    <div className='product' onClick={() => {
      if (window.matchMedia("(max-width: 600px)").matches) onClick(id)
    }} >
      <img src={ img } alt={ name }></img>
      <div className='detail'>
        <div>
          <span>{ name }</span>
          <span>¥{ price }</span>
        </div>
        <div className='description'>{ description }</div>
      </div>
    </div>
  )
};
