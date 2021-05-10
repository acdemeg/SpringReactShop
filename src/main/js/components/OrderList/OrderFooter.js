import React from 'react';
import ActionsButton from './ActionsButton';
import './Order.css';

const OrderFooter = ({ orderTotal, orderId, updateOrder, profile }) => (
  <div className="order-footer">
    <div className="left">
      <span style={{ fontSize: '15pt' }}>
        &emsp;Общая стоимость &emsp; {`${orderTotal}`}&#8381;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;
      </span>
    </div>
    <div className="right">
      <ActionsButton 
        orderId={orderId} 
        orderTotal={orderTotal} 
        updateOrder={updateOrder}
        profile={profile}
      />
    </div>
  </div>
);

export default OrderFooter;
