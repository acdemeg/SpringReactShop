import React from 'react';
import style from './UsersInfo.scss';
import { scenesEnum } from '../../constants';
import OrderSlot from './OrderSlot';

const UserOrders = ({ user, orders, updateOrder }) => {
  if (!user) 
    return null;

  const ordersOfUser = orders.filter(v => v.userId === user.id);

  return (
    <div className={style.ordersUser}>
      <div className={style.listOrdersFont}>
        <b>Список заказов пользователя</b> &nbsp;
        {`${user.name}`}
      </div>
      <div className={style.ordersWrapper}>
        {ordersOfUser.map(order => (
          <OrderSlot
            user={user}
            key={order.id}
            order={order}
            updateOrder={updateOrder}
            scene={scenesEnum.ADMIN_USERS_INFO}
          />
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
