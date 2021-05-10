import React from 'react';
import { typeModalEnum, messages } from '../../constants';
import InputForm from './InputForm';

import './Modal.css';

const Modal = ({ title, typeModal, isOpenModal, onCancel, onSubmit, profile }) => {
  let inputValue = 'unknown';
  const getValueFromInput = value => {
    inputValue = value;
  };

  const getAlertText = () => {
    if (typeModal === typeModalEnum.FILL_UP) {
      return messages.FILL_UP;
    }
  
    if (typeModal === typeModalEnum.EMAIL) {
      return messages.EMAIL_UPDATE;
    }
  
    if (typeModal === typeModalEnum.PHONE) {
      return messages.PHONE_UPDATE;
    }
  
    if (typeModal === typeModalEnum.NAME) {
      return messages.NAME_UPDATE;
    }
  };

  return (
    <>
      {isOpenModal && (
        <div className="modalOverlay">
          <form
            id="ProfileModalSubmit"
            onSubmit={event => {
              event.preventDefault();
              onSubmit(inputValue, getAlertText(), typeModal, profile);
            }}
          >
          <div className="modalWindow">
            <div className="modalHeader">
              <div className="modalTitle">{title}</div>
            </div>
            <div className="modalBody">
              <InputForm typeModal={typeModal} getValueFromInput={getValueFromInput} />
            </div>
            <div className="modalFooter">
              <button 
                type="submit"
                onClick={() => {
                  event.preventDefault()
                  onCancel()
                }} 
                  className="button is-rounded is-small cancel"
                >
                  {' '}
                Отменить{' '}
              </button>
              <button
                type="submit"
                className="button is-rounded is-small submit"
              >
                {' '}
                Подтвердить{' '}
              </button>
            </div>
          </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Modal;
