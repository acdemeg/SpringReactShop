import React from 'react';
import style from './UsersInfo.scss';

const OrderHeader = ({ orderCode }) => (
  <div className={style.orderHeader}>
    <div>Номер:&ensp;{orderCode}</div>
    <div>Название</div>
    <div>Количество</div>
    <div>Цена</div>
    <div>Статус</div>
    <div>Сумма заказа</div>
    <div>Действия</div>
  </div>
);

export default OrderHeader;
