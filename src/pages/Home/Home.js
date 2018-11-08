import React, { Component } from 'react';
import SelectDomainForm from './SelectDomainForm';
import SearchDomainForm from './SearchDomainForm';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableDomains: null,
      requestedDomains: [],
    };
  }

  render() {
    const { availableDomains, requestedDomains } = this.state;

    return (
      <div className="row">
        <h2>Home</h2>
        <SearchDomainForm
          {...this.props}
          onSearchStart={value => this.setState({ requestedDomains: value })}
          onSearchFinish={value => this.setState({ availableDomains: value })}
        />
        <SelectDomainForm
          {...this.props}
          domains={requestedDomains}
          availableDomains={availableDomains}
        />
      </div>
    );
  }
}
