import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';

const MinusButton = ({ onDecrease }) => (
  <div className="goods-operation">
    <div onClick={onDecrease} className="button" style={{ backgroundColor: 'inherit' }}>
      <FontAwesomeIcon
        className="fas fa-minus-square fa-lg"
        css={{
          color: 'Gold',
        }}
        icon="minus-square"
      />
    </div>
  </div>
);

export default MinusButton;
