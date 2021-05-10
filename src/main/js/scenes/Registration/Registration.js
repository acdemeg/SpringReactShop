import React from 'react';
import { connect } from 'react-redux';
import styles from './Registration.scss';
import InputField from '../../components/inputs/InputField';
import PassAndEmailInputs from '../../components/inputs/PassAndEmailInputs';
import { REGISTER } from '../../store/actions';
import { scenesEnum } from '../../constants';
import ButtonConfirm from '../../components/buttons/ButtonConfirm';
import ShowNotification from '../../components/ShowNotification';

const Registration = ({ onReg, notifications }) => {
  return (
    <form id="RegForm" onSubmit={onReg}>
      <div className={styles.googleFont}>
        Registration
        <div className={styles.regForm}>
          <InputField
            inputColor="colorName"
            type="text"
            name="name"
            placeholder="Username"
            minLength="1"
            iconLeft="user"
            iconRight="iconName"
            inputTitle="Введите ваше имя"
          />
          <InputField
            inputColor="colorPhone"
            type="text"
            name="phone"
            placeholder="Phone"
            minLength="4"
            iconLeft="phone"
            iconRight="iconPhone"
            inputTitle="Введите ваш телефон"
          /> 
          <PassAndEmailInputs />
          <InputField
            inputColor="colorPasswRepeat"
            type="password"
            name="password_repeat"
            placeholder="Repeat password"
            minLength="6"
            iconLeft="lock"
            iconRight="iconPasswRepeat"
            inputTitle="Повторите ваш пароль"
          />
        </div>
        <ButtonConfirm />
      </div>
      <ShowNotification notifications={notifications} currentScene={scenesEnum.REG} />
    </form>
  );
};

const mapStateToProps = ({ notifications }) => ({
  notifications,
});

const mapDispatchToProps = dispatch => ({
  onReg: event => {
    REGISTER(event, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
