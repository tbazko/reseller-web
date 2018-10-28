import React from 'react';

const Home = () => (
  <div>
    <h2>Home</h2>
    <form>
      <label htmlFor="domainSearch">Check for free domain names</label>
      <input id="domainSearch" />
      <br />
      <label htmlFor="com">.com</label>
      <input type="checkbox" id="com" />
      <label htmlFor="comUa">.com.ua</label>
      <input type="checkbox" id="comUa" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Home;
