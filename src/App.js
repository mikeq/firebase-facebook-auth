import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import firebase from 'firebase';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import './App.css';
import NavBar from './components/header/NavBar';
import ButtonBar from './components/buttonbar/ButtonBar';
import UserInfo from './components/user/UserInfo';
import config from './config/config';

class App extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      isLoggedIn: false,
      userInfo: null
    };

    firebase.initializeApp(config);
  }

  login() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(resp => {
        this.setState({
          isLoggedIn: true,
          userInfo: {
            userName: resp.user.displayName,
            email: resp.user.email,
            avatar: resp.user.photoURL
          }
        });
      })
      .catch(error => console.log(error));
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => this.setState({ isLoggedIn: false }))
      .catch(error => console.log(error));
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="grid">
        <NavBar />
        <div className="main">
          <Paper
            style={{
              display: 'grid',
              padding: '0.2em',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {!isLoggedIn ? (
              <Typography type="title">You are not logged in.</Typography>
            ) : (
              <UserInfo user={this.state.userInfo} />
            )}
          </Paper>
          <ButtonBar
            login={this.login}
            logout={this.logout}
            isLoggedIn={this.state.isLoggedIn}
          />
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%'
  }
});

export default withStyles(styles)(App);
