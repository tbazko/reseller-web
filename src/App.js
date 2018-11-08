import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CabinetArea from './pages/CabinetArea';
import * as userApi from './api/user';
import * as domainsApi from './api/domains';

export const AuthenticationContext = React.createContext({
  userIsLoggedIn: false,
  setIsLoggedIn: () => { },
});

export const RegistrationContext = React.createContext({
  selectedDomain: null,
  setSelectedDomain: () => { },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoggedIn: false,
      setIsLoggedIn: this.setIsLoggedIn, // eslint-disable-line

      selectedDomain: null, // eslint-disable-line
      setSelectedDomain: this.setSelectedDomain, // eslint-disable-line
    };
  }

  setIsLoggedIn = () => {
    this.setState(state => ({
      userIsLoggedIn: state.userIsLoggedIn === false,
    }));
  }

  setSelectedDomain = (selectedDomain) => {
    this.setState({ selectedDomain }); // eslint-disable-line
  }

  render() {
    const { userIsLoggedIn } = this.state;

    return (
      <Router>
        <div>
          <Header />
          <AuthenticationContext.Provider value={this.state}>
            <RegistrationContext.Provider value={this.state}>
              <RegistrationContext.Consumer>
                {({ setSelectedDomain }) => (
                  <Route
                    exact
                    path="/"
                    render={props => (<Home {...props} domainsApi={domainsApi} onSubmit={setSelectedDomain} />)}
                  />
                )}
              </RegistrationContext.Consumer>

              <RegistrationContext.Consumer>
                {({ selectedDomain }) => (
                  <Route
                    path="/register"
                    render={() => (<Register userApi={userApi} selectedDomain={selectedDomain} />)}
                  />
                )}
              </RegistrationContext.Consumer>
            </RegistrationContext.Provider>
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
