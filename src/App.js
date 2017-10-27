import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import LockOpen from 'material-ui-icons/LockOpen';
import Lock from 'material-ui-icons/Lock';
import firebase from 'firebase';

import './App.css';
import NavBar from './components/header/NavBar';
import config from './config/config';

class App extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    firebase.initializeApp(config);
  }

  login() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(resp => console.log(resp))
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <div className="grid">
          <div>
            <Button raised color="accent" onClick={this.login}>
              <Icon>
                <LockOpen />
              </Icon>Login
            </Button>
          </div>
          <div>
            <Button raised color="accent" onClick={this.logout}>
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
