import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import CabinetArea from './pages/CabinetArea';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/buy-domain" component={Register} />
      <Route path="/cabinet" component={CabinetArea} />
    </div>
  </Router>
);

const Header = () => (
  <ul className="header-menu">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/buy-domain">Buy domain</Link>
    </li>
    <li>
      <Link to="/cabinet">visible if signin</Link>
    </li>
  </ul>
);

export default App;
