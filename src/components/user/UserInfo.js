import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

class UserInfo extends React.Component {
  render() {
    const { userName, email, avatar } = this.props.user;
    return (
      <div style={{ overflow: 'hidden' }}>
        <Avatar src={avatar} style={{ height: 60, width: 60, float: 'left' }} />
        <div style={{ float: 'left', padding: '0.2em' }}>
          <Typography type="title">{userName}</Typography>
          <Typography type="subheading">{email}</Typography>
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
};

export default UserInfo;
