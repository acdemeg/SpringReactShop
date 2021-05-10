import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';

const TrashButton = ({ onDelete }) => (
  <div className="goods-operation">
    <div onClick={onDelete} className="button" style={{ backgroundColor: 'inherit' }}>
      <FontAwesomeIcon
        className="fas fa-trash-alt fa-lg"
        css={{
          color: 'Crimson',
        }}
        icon="trash-alt"
      />
    </div>
  </div>
);

export default TrashButton;
