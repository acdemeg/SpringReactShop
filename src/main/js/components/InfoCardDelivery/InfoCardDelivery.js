import React from 'react';
import style from './styleInfoCardDelivery';
import './InfoCardDelivery.css';

function InfoCardDelivery({ item }) {
  const { nameProduct, count, total, pathImage } = item;

  return (
    <div style={style.infoCardForm}>
      <div style={style.imagePlace}>
        <img src={`/upload/products/${pathImage}`} width="180px" height="180px" />
      </div>
      <div style={style.titleProduct}>
        <div style={{ marginLeft: '10px' }}>
          <p style={style.titleProduct.name}>{nameProduct}</p>
        </div>
      </div>
      <div style={style.price}>
        <p style={style.price.product}>{`${total}$`}</p>
      </div>
      <div style={style.client}>
        <p style={style.client.view}>Client:</p>
      </div>
      <div style={style.number}>
        <p style={style.number.view}>+7 XXX XXX XX-XX</p>
      </div>
      <div style={style.deliverButton}>
        <button
          className="button is-rounded is-small deliver-button"
          type="submit"
          value="Add to cart"
        >
          Deliver
        </button>
      </div>
    </div>
  );
}

export default InfoCardDelivery;
