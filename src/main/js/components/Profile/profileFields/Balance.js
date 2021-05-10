import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Profile.css';

const Balance = ({ balance }) => (
  <div className="profile-field">
    <FontAwesomeIcon
      className="fas fa-wallet fa-lg"
      css={{
        color: 'black',
      }}
      icon="wallet"
    />{' '}
    &nbsp; Баланс счета: &emsp; {`${balance}`}&#8381;
  </div>
);

export default Balance;
