import React from 'react';
import PropTypes from 'prop-types';
import './Cabinet.css';

const Cabinet = props => (
  <div className="row">
    <div className="sidebar">
      <h2>Cabinet</h2>
      <ul className="cabinet-menu">
        <li className="item"><a className="link" href="/list" title="some title">show incomes</a></li>
        <li className="item">
          <button className="link" type="button" onClick={props.onLogout}>Logout</button>
        </li>
      </ul>
    </div>
    <div className="cabinet-data">
      <p>Here some data</p>
    </div>
  </div>
);

Cabinet.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Cabinet;
