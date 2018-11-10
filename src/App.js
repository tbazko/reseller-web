import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cabinet from './pages/Cabinet';
import * as userApi from './api/user';
import * as domainsApi from './api/domains';
import authenticator from './services/authenticator';

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
    this.authenticator = authenticator(userApi, this.setIsLoggedIn);
  }

  setIsLoggedIn = (isLoggedIn) => {
    this.setState(state => ({
      userIsLoggedIn: typeof isLoggedIn === 'undefined' ? state.userIsLoggedIn === false : isLoggedIn,
    }));
  }

  setSelectedDomain = (selectedDomain) => {
    this.setState({ selectedDomain }); // eslint-disable-line
  }

  renderLoginOrRedirectToCabinet = () => {
    const { login, loginIfRememberedUser } = this.authenticator;

    if (this.state.userIsLoggedIn) {
      return (<Redirect to="/cabinet" />);
    }

    return (
      <Login
        onLogin={login}
        onCheckRememberedUser={loginIfRememberedUser}
      />
    );
  }

  renderCabinetOrRedirectToLogin = () => {
    if (this.state.userIsLoggedIn) {
      return (<Cabinet onLogout={this.authenticator.logout} />);
    }

    return (<Redirect to="/login" />);
  }


  render() {
    return (
      <Router>
        <div>
          <Header />
          <RegistrationContext.Provider value={this.state}>
            <RegistrationContext.Consumer>
              {({ setSelectedDomain }) => (
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home {...props} domainsApi={domainsApi} onSubmit={setSelectedDomain} />
                  )}
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
          <Route path="/login" render={this.renderLoginOrRedirectToCabinet} />
          <Route path="/cabinet" render={this.renderCabinetOrRedirectToLogin} />
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
      <Link to="/cabinet">Dashboard</Link>
    </li>
    <li>
      <Link to="/register">Buy domain</Link>
    </li>
  </ul>
);

export default App;
