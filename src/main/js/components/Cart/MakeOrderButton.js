import React from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import { messages } from '../../constants';

const MakeOrderButton = ({ makeOrder, items, orderTotal, userId, profile }) => {
  const getClassStyle = items => {
    if (items.length === 0) {
      return 'make-order m-o-disabled';
    }
    return 'make-order';
  };

  return (
    <div
      onClick={() => makeOrder(orderTotal, items, messages.MAKE_ORDER, userId, profile)}
      className={getClassStyle(items)}
    >
      ЗАКАЗАТЬ
    </div>
  );
};

const mapStateToProps = ({
  authorization: { userId }, 
  profile,
}) => ({ userId, profile });

export default connect(
  mapStateToProps,
  null,
)(MakeOrderButton);
