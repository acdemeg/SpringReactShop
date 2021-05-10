import React from 'react';
import MakeOrderButton from './MakeOrderButton';
import './Cart.css';

const CartFooter = ({ orderTotal, makeOrder, items }) => (
  <div className="cart-footer">
    <div className="left">
      <span style={{ fontSize: '15pt' }}>
        &emsp;Сумма &nbsp; заказа &emsp; {`${orderTotal}`}&#8381;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;
      </span>
    </div>
    <div className="right">
      <MakeOrderButton makeOrder={makeOrder} items={items} orderTotal={orderTotal} />
    </div>
  </div>
);

export default CartFooter;
