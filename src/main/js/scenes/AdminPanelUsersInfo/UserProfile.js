import React from 'react';
import style from './UsersInfo.scss';
import { orderStatusEnum } from '../../constants';

const UserProfile = ({ user, orders }) => {
  if (!user) {
    return (
      <div className={style.profileUser}>
        <div className={style.googleFont}><b>Пользователь не найден</b></div>
      </div>
    );
  }
  const imagePath = user.imagePath ? user.imagePath : 'default_avatar.png';
  let createdOrders = 0;
  let acceptedOrders = 0;
  let canceledOrdres = 0;

  orders.forEach(order => {
    if (order.userId === user.id) {
      if (order.status === orderStatusEnum.DONE) {
        acceptedOrders += 1;
        return;
      }
      if (order.status === orderStatusEnum.CANCELED) {
        canceledOrdres += 1;
        return;
      }
      createdOrders += 1;
    }
  });


  return (
    <div className={style.profileUser}>
      <div className={style.photoWrapper}>
        <div className={style.userPhoto}>
          <img alt="avatar" src={`/upload/users/${imagePath}`} width="300px" height="350px" />
        </div>
      </div>
      <div className={style.userInfo}>
        <div>
          <p>
            Имя пользователя:&emsp;
            <i style={{ color: 'blue' }}>{user.name}</i>
          </p>
        </div>
        <div>
          <p>
            Email пользователя:&emsp;
            <i style={{ color: 'blue' }}>{user.email}</i>
          </p>
        </div>
        <div>
          <p>
            Телефон пользователя:&emsp;
            <i style={{ color: 'blue' }}>{user.phone}</i>
          </p>
        </div>
        <div>
          <p>
            Баланс пользователя:&emsp;
            <i style={{ color: 'blue' }}>{user.balance}</i>
          </p>
        </div>
        <div>
          <p>
            Созданные заказы:&emsp;
            <i style={{ color: 'gray' }}>{createdOrders}</i>
          </p>
        </div>
        <div>
          <p>
            Подтвержденные заказы:&emsp;
            <i style={{ color: 'mediumspringgreen' }}>{acceptedOrders}</i>
          </p>
        </div>
        <div>
          <p>
            Отмененные заказы:&emsp;
            <i style={{ color: 'crimson' }}>{canceledOrdres}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
