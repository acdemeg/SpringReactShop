import React from 'react';
import { typeModalEnum } from '../../../constants';
import '../Profile.css';

const RedactFields = ({ openModal }) => (
  <div style={{ float: 'right' }}>
    <div
      onClick={() => openModal({ type: typeModalEnum.NAME, title: 'Введите ваше новое имя' })}
      className="redact"
      style={{ fontSize: '20pt' }}
    >
      {' '}
      &#9997;{' '}
    </div>

    <div
      onClick={() => openModal({ type: typeModalEnum.PHONE, title: 'Введите ваш новый телефон' })}
      className="redact"
      style={{ fontSize: '20pt' }}
    >
      {' '}
      &#9997;{' '}
    </div>

    <div
      onClick={() => openModal({ type: typeModalEnum.EMAIL, title: 'Введите ваш новый Email' })}
      className="redact"
      style={{ fontSize: '20pt' }}
    >
      {' '}
      &#9997;{' '}
    </div>

    <div
      onClick={() => openModal({ type: typeModalEnum.FILL_UP, title: 'Пополнить ваш баланс' })}
      className="redact"
      style={{ fontSize: '15pt' }}
    >
      Пополнить
    </div>
  </div>
);

export default RedactFields;
