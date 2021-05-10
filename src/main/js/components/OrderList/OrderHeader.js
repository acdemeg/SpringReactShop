import React from 'react';
import './Order.css';

const OrderHeader = ({ orderCode }) => (
  <div className="order-header">
    <span style={{ fontSize: '15pt' }}>
      &emsp;ИНФОРМАЦИЯ О ЗАКАЗЕ&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      Код заказа:&ensp;{orderCode}
      </span>
  </div>
);

export default OrderHeader;
