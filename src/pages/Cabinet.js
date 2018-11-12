import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cabinet.css';

export default class Cabinet extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    getUserSelf: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  async componentWillMount() {
    const userRawData = await this.props.getUserSelf();
    this.setState({ user: userRawData });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="row">
        <div className="sidebar">
          <h2>Cabinet</h2>
          <ul className="cabinet-menu">
            <li className="item"><a className="link" href="/list" title="some title">show incomes</a></li>
            <li className="item">
              <button className="link" type="button" onClick={this.props.onLogout}>Logout</button>
            </li>
          </ul>
        </div>
        <div className="cabinet-data">
          <h3>Your profile:</h3>
          {user && (
            <div>
              <p>{user.name || ''}</p>
              <p>{user.lastname || ''}</p>
              <p>{user.email}</p>
              <p>{user.phonenumber}</p>
              <p>Has hosting: {user.hosting.toString()}</p>
              <h4>Address:</h4>
              <p>{user.city}</p>
              <p>{user.street}</p>
              <p>{user.room}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
