import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import LockOpen from 'material-ui-icons/LockOpen';
import Lock from 'material-ui-icons/Lock';

const ButtonBar = props => {
  return (
    <div className="button-bar">
      <Button
        raised
        color="accent"
        onClick={props.login}
        disabled={props.isLoggedIn}
      >
        <Icon>
          <LockOpen />
        </Icon>Login
      </Button>
      <Button
        raised
        color="accent"
        onClick={props.logout}
        disabled={!props.isLoggedIn}
      >
        <Icon>
          <Lock />
        </Icon>Logout
      </Button>
    </div>
  );
};

ButtonBar.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default ButtonBar;
