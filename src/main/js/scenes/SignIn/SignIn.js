import React from 'react';
import { connect } from 'react-redux';
import styles from './SignIn.scss';
import register from '../Registration/Registration.scss';
import { LOGIN } from '../../store/actions';
import { scenesEnum } from '../../constants';
import PassAndEmailInputs from '../../components/inputs/PassAndEmailInputs';
import ButtonConfirm from '../../components/buttons/ButtonConfirm';
import ShowNotification from '../../components/ShowNotification';

const SignIn = ({ onLogin, notifications }) => {
  return (
    <form id="LogInForm" onSubmit={onLogin}>
      <div className={register.googleFont}>
        Sign In
        <div className={styles.signInForm}>
          <PassAndEmailInputs />
        </div>
        <ButtonConfirm />
      </div>
      <ShowNotification notifications={notifications} currentScene={scenesEnum.LOG_IN} />
    </form>
  );
};

const mapStateToProps = ({ notifications }) => ({ notifications });

const mapDispatchToProps = dispatch => ({
  onLogin: event => {
    LOGIN(event, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
