import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Profile.css';

const Phone = ({ phone }) => (
  <div className="profile-field">
    <FontAwesomeIcon
      className="fas fa-phone-square-alt fa-lg"
      css={{
        color: 'black',
      }}
      icon="phone-square-alt"
    />{' '}
    &nbsp; Телефон: &emsp;&nbsp;&nbsp;&nbsp; {phone}
  </div>
);

export default Phone;
