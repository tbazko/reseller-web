import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './Login.css';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onCheckRememberedUser: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  async componentWillMount() {
    this.props.onCheckRememberedUser();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.onLogin(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="row">
        <h2>Login</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} id="email" defaultValue={email} />
            <br />
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} id="password" defaultValue={password} />
            <br />
          </fieldset>
          <fieldset>
            <button name="submit" type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
