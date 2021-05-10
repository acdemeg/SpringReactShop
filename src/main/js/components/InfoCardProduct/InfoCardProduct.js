import React from 'react';
import style from './styleInfoCardProduct';
import { NavLink } from 'react-router-dom';
import './InfoCardProduct.css';

function InfoCardProduct({ item, onAddedToCart, isLoggedIn }) {
  const { id, nameProduct, description, price, pathImage } = item;

  return (
    <div style={style.infoCardForm}>
      <div style={style.imagePlace}>
        {
          (pathImage) 
          ? <img 
              src={(pathImage.startsWith("data:image/")) ? pathImage : `/upload/products/${pathImage}` }
              width="180px" height="180px" />
          : <img src={`/upload/products/notImage.png`} width="180px" height="180px" />
        }
        
      </div>
      <div style={style.titleProduct}>
        <div style={{ marginLeft: '10px' }}>
        <NavLink to={`/productInfo/${id}`}>
          <p style={style.titleProduct.name}>{nameProduct}</p>
        </NavLink>
          <p style={style.titleProduct.description}>{description}</p>
        </div>
      </div>
      <div style={style.price}>
        <p style={style.price.product}>{`${price}`}&#8381;</p>
      </div>
      <div style={style.addToCardButton}>
        <button
          onClick={onAddedToCart}
          className={`button is-rounded is-small add-to-card
          ${(isLoggedIn) ? '' : 'add-disabled'}`}
          type="submit"
          value="Add to cart"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default InfoCardProduct;
