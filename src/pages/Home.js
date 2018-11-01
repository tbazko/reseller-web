import React from 'react';
import './Home.css';

const Home = () => (
  <div className="row">
    <h2>Home</h2>
    <form className="form" >
      <fieldset>
        <label htmlFor="domainSearch">Check for free domain names</label>
        <input id="domainSearch" />
        <br />
      </fieldset>
      <fieldset>
        <label htmlFor="com">.com</label>
        <input type="checkbox" id="com" />
        <label htmlFor="comUa">.com.ua</label>
        <input type="checkbox" id="comUa" />
        <br />
      </fieldset>
      <fieldset>
        <input type="submit" value="Submit" />
       </fieldset>
    </form>
  </div>
);

export default Home;
