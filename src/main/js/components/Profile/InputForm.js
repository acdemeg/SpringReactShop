import React from 'react';
import { typeModalEnum } from '../../constants';
import './Modal.css';

const InputForm = ({ typeModal, getValueFromInput }) => {
  switch (typeModal) {
    case typeModalEnum.NAME:
      return (
        <input
          id="modal"
          type="text"
          required
          minLength="1"
          placeholder="Example: Nastya"
          onChange={e => getValueFromInput(e.target.value)}
        />
      );

    case typeModalEnum.PHONE:
      return (
        <input
          id="modal"
          type="tel"
          pattern="^[+]{1}[1-9]{1}[0-9]{10}$"
          required
          minLength="12"
          placeholder="Example: +79157772244"
          onChange={e => getValueFromInput(e.target.value)}
        />
      );

    case typeModalEnum.EMAIL:
      return (
        <input
          id="modal"
          type="email"
          required
          minLength="3"
          placeholder="Example: nastya@mail.ru"
          onChange={e => getValueFromInput(e.target.value)}
        />
      );

    case typeModalEnum.FILL_UP:
      return (
        <input
          id="modal"
          type="number"
          step="0.01"
          min="1"
          max="10000"
          required
          minLength="1"
          placeholder="In range: 1-10000"
          onChange={e => getValueFromInput(e.target.value)}
        />
      );

    default:
      return <input id="modal" type="text" onChange={e => getValueFromInput(e.target.value)} />;
  }
};

export default InputForm;
