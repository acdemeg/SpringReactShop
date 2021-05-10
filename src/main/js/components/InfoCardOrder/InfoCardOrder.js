import React from 'react';
import { orderStatusEnum } from '../../constants';
import { NavLink } from 'react-router-dom';
import './InfoCardOrder.css';

function InfoCardOrder({ item, status, count }) {
  const { id, nameProduct, price, pathImage } = item;

  return (
    <div className="info-order-form">
      <div className="image-place-order">
        {
          (pathImage) 
          ? <img src={(pathImage.startsWith("data:image/")) ? pathImage : `/upload/products/${pathImage}` }
            width="160px" height="160px" />
          : <img src={`/upload/products/notImage.png`} width="160px" height="160px" />
        }
      </div>

      <div className="order-place">
        <div style={{ marginBottom: '6px' }}>
          <NavLink to={`/productInfo/${id}`}>
            <p>{nameProduct}</p>
          </NavLink>
        </div>

        <div style={{ marginBottom: '6px' }}>
          <p style={{ float: 'left' }}>Количество &emsp; </p>
          <div className="info-order-form-field">
            {' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {count}{' '}
          </div>
        </div>

        <div style={{ marginBottom: '6px' }}>
          <p style={{ float: 'left' }}>Стоимость &emsp; </p>
          <div className="info-order-form-field">
            {' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`${price * count}`}&#8381;{' '}
          </div>
        </div>

        <div>
          <p style={{ float: 'left' }}>Статус заказа &emsp; </p>
          <div
            className="info-order-form-field"
            style={{ float: 'left', color: status == orderStatusEnum.DONE ? 'MediumSeaGreen' 
                    : status == orderStatusEnum.CANCELED ? 'Crimson' : 'Deepskyblue'}}
          >
            &nbsp; {status} &emsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCardOrder;
