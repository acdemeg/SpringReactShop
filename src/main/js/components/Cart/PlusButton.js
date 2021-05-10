import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';

const PlusButton = ({ onIncrease }) => (
  <div className="goods-operation">
    <div onClick={onIncrease} className="button" style={{ backgroundColor: 'inherit' }}>
      <FontAwesomeIcon
        className="fas fa-plus-square fa-lg"
        css={{
          color: 'MediumSeaGreen',
        }}
        icon="plus-square"
      />
    </div>
  </div>
);

export default PlusButton;
