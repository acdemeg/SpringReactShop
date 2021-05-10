import React from 'react';
import './Cart.css';

const Count = ({ count }) => (
  <div className="goods-operation">
    <p style={{ fontSize: '14pt', marginTop: '7px' }}>{count}</p>
  </div>
);

export default Count;
