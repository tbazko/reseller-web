import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BuyDomainForm from './pages/BuyDomainForm';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/buy-domain" component={BuyDomainForm} />
    </div>
  </Router>
);

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/buy-domain">Buy domain</Link>
    </li>
  </ul>
);

export default App;
