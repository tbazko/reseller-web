import React from 'react';
import './CabinetArea.css';

const CabinetArea = () => (
  <div className="row">
    <div className="sidebar">
      <h2>CabinetArea</h2>
      <p>Here must be check for session if it isset</p>
      <ul className="cabinet-menu">
        <li className="item"><a className="link" href="/list" title="some title">show incomes</a></li>
        <li className="item"><a className="link" href="/exit" title="some title">Exit</a></li>
      </ul>
    </div>
    <div className="cabinet-data">
      <p>Here some data</p>
    </div>
  </div>
);

export default CabinetArea;
