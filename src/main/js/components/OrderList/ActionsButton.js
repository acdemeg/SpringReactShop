import React, { useState }from 'react';
import { connect } from 'react-redux';
import { orderStatusEnum, scenesEnum } from '../../constants'
import './Order.css';

const ActionsButton = ({ orderId, updateOrder, userId, profile, orderTotal }) => {

  if(updateOrder === "disable")
    return null;

  const [nameClass, setNameClass] = useState('dropdown');

  return (
    <div className="actions-order">
      <div
        className={nameClass}
        onClick={() => {
          nameClass === 'dropdown' ? setNameClass('dropdown is-active') : setNameClass('dropdown');
        }}
      >
        <span style={{ marginLeft: '40px' }}>ДЕЙСТВИЯ</span>
        <div
          className="dropdown-menu"
          id="dropdown-menu"
          role="menu"
          style={{ textAlign: 'left', paddingTop: 0, minWidth: '170px' }}
        >
          <div className="dropdown-content">
            <a 
              href="#" 
              className="dropdown-item" 
              onClick={() => updateOrder(
                orderId, 
                orderStatusEnum.CANCELED, 
                userId, 
                profile, 
                orderTotal,
                scenesEnum.ORDER_LIST
                )}>
              Отменить заказ
            </a>
            <a
              href="#"
              className="dropdown-item"
              onClick={() => updateOrder(
                orderId, 
                orderStatusEnum.DONE, 
                userId, 
                profile, 
                orderTotal,
                scenesEnum.ORDER_LIST
                )}
            >
              Подтвердить получение
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  authorization: { userId }, 
}) => ({ userId });

export default connect(
  mapStateToProps,
  null,
)(ActionsButton);