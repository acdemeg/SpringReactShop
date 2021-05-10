import React, { useEffect } from 'react';
import InfoCardOrder from '../InfoCardOrder';
import { container } from '../ProductList/ProductList.scss';
import OrderHeader from './OrderHeader';
import OrderFooter from './OrderFooter';
import './Order.css';

const Order = ({ order, updateOrder, profile}) => {

  return (
    <div className="order">
      <OrderHeader orderCode={order.orderCode}/>
      <div className={container}>
        {order.products.map(item => (
          <InfoCardOrder 
            key={item.id}
            item={item}
            status={order.status}
            count={order.productsInOrder.find(v => v.productId === item.id).count}  
            />
        ))}
      </div>
      <OrderFooter 
        orderTotal={order.total}
        orderId={order.id}
        updateOrder={updateOrder} 
        profile={profile}/>
    </div>
  );
};

export default Order;
