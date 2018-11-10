export default function authenticator(userApi, setIsLoggedInState) {
  const { establishSession, destroySession, hasValidSession } = userApi;

  return new Authenticator(
    establishSession,
    destroySession,
    hasValidSession,
    setIsLoggedInState,
  );
}

class Authenticator {
  constructor(
    establishApiSession,
    destroyApiSession,
    hasValidSession,
    setIsLoggedInState,
  ) {
    this.establishApiSession = establishApiSession;
    this.destroyApiSession = destroyApiSession;
    this.hasValidSession = hasValidSession;
    this.setIsLoggedInState = setIsLoggedInState;
  }

  login = ({ email, password }) => {
    this.establishApiSession({ email, password })
      .then(this._rememberUser)
      .then(this.setIsLoggedInState)
      .catch(err => console.log);
  }

  _rememberUser = user => localStorage.setItem('reseller_uid', user.id);

  logout = () => {
    this.destroyApiSession()
      .then(this._forgetUser)
      .then(this.setIsLoggedInState)
      .catch(err => console.log);
  }

  _forgetUser = () => localStorage.removeItem('reseller_uid');

  loginIfRememberedUser = async () => {
    this.hasValidSession()
      .then(({ isAuthenticated }) => this.setIsLoggedInState(isAuthenticated))
      .catch(err => console.log);
  }
}
