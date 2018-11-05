import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

class Home extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      domainName: '',
      domainZone: '', // eslint-disable-line
    };
  }

  handleChange = (event) => {
    const {
      id, value,
    } = event.target;
    this.setState({ [id]: value });
  }

  combineDomainNameAndZone = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { domainName, domainZone } = this.state;
    this.props.onSubmit(domainName.concat(domainZone));
    this.props.history.push('/register');
  }

  render() {
    const { domainName } = this.state;

    return (
      <div className="row">
        <h2>Home</h2>
        <form className="form" onSubmit={this.combineDomainNameAndZone}>
          <fieldset>
            <label htmlFor="domainName">Check for free domain names</label>
            <input onChange={this.handleChange} id="domainName" defaultValue={domainName} />
            <br />
          </fieldset>
          <fieldset>
            <label htmlFor="domainZone">.com</label>
            <input onChange={this.handleChange} type="radio" name="domainZone" id="domainZone" value=".com" />
            <label htmlFor="domainZone">.com.ua</label>
            <input onChange={this.handleChange} type="radio" name="domainZone" id="domainZone" value=".com.ua" />
            <br />
          </fieldset>
          <fieldset>
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}


export default Home;
