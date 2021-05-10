import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Profile.css';

const Email = ({ email }) => (
  <div className="profile-field">
    <FontAwesomeIcon
      className="fas fa-envelope fa-lg"
      css={{
        color: 'black',
      }}
      icon="envelope"
    />{' '}
    &nbsp; Email: &emsp;&emsp; {email}
  </div>
);

export default Email;
