import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const NavBar = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography type="title" color="inherit">
          Firebase Facebook Authentication
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
