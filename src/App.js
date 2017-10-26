import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import LockOpen from 'material-ui-icons/LockOpen';
import Lock from 'material-ui-icons/Lock';

import './App.css';
import NavBar from './components/header/NavBar';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <div className="grid">
          <div>
            <Button raised color="accent">
              <Icon>
                <LockOpen />
              </Icon>Login
            </Button>
          </div>
          <div>
            <Button raised color="accent">
              <Icon>
                <Lock />
              </Icon>Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  }
});

export default withStyles(styles)(App);
