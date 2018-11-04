import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CabinetArea from './pages/CabinetArea';
import * as userApi from './api/user';

export const AuthenticationContext = React.createContext({
  userIsLoggedIn: false,
  setIsLoggedIn: () => { },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoggedIn: false,
      setIsLoggedIn: this.setIsLoggedIn, // eslint-disable-line
    };
  }

  setIsLoggedIn = () => {
    this.setState(state => ({
      userIsLoggedIn: state.userIsLoggedIn === false,
    }));
  }

  render() {
    const { userIsLoggedIn } = this.state;
    console.log(userIsLoggedIn);
    return (
      <Router>
        <div>
          <Header />
          <AuthenticationContext.Provider value={this.state}>
            <Route exact path="/" component={Home} />
            <Route
              path="/register"
              render={() => (<Register userApi={userApi} />)}
            />
            <Route
              path="/login"
              render={() => (
                userIsLoggedIn ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <AuthenticationContext.Consumer>
                    {({ setIsLoggedIn }) => (
                      <Login onLogin={setIsLoggedIn} userApi={userApi} />
                    )}
                  </AuthenticationContext.Consumer>
                )
              )} />
            <Route
              path="/dashboard"
              render={() => (
                userIsLoggedIn ? <CabinetArea /> : <Redirect to="/login" />
              )} />
          </AuthenticationContext.Provider>
        </div>
      </Router>
    );
  }
}

const Header = () => (
  <ul className="header-menu">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/register">Buy domain</Link>
    </li>
  </ul>
);

export default App;
