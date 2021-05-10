import React from 'react';
import TrashButton from './TrashButton';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import Count from './Count';
import './Cart.css';

function ProductInCart({ item, onIncrease, onDecrease, onDelete }) {
  const { nameProduct, count, total, pathImage } = item;

  return (
    <div className="cart-goods">
      <TrashButton onDelete={onDelete} />
      <MinusButton onDecrease={onDecrease} />
      <Count count={count} />
      <PlusButton onIncrease={onIncrease} />

      <div className="cart-goods-image">
        {
          (pathImage) 
          ? <img src={(pathImage.startsWith("data:image/")) ? pathImage : `/upload/products/${pathImage}` }
              width="80px" height="80px" />
          : <img src={`/upload/products/notImage.png`} width="80px" height="80px" />
        }
      </div>
      <div className="cart-goods-title"> {nameProduct} </div>
      <div className="cart-goods-price"> {`${total}`}&#8381; </div>
    </div>
  );
}

export default ProductInCart;
