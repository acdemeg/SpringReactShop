import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LOG_OUT, SHOW_ALERT } from '../store/actions';
import { connect } from 'react-redux';
import { scenesEnum, messages } from '../constants';

function LogOut({ logOut }) {
  return (
    <li onClick={logOut}>
      <div className="button" style={{ backgroundColor: 'inherit' }}>
          <FontAwesomeIcon
            className="fas fa-door-open fa-lg"
            css={{
              color: 'black',
            }}
            icon="door-open"
          />
      </div>
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(LOG_OUT());
    dispatch(SHOW_ALERT(scenesEnum.LOG_IN, messages.LOG_OUT));
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(LogOut);