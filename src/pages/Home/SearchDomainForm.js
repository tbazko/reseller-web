import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

export default class SearchDomainForm extends Component {
  static propTypes = {
    onSearchStart: PropTypes.func.isRequired,
    onSearchFinish: PropTypes.func.isRequired,
    domainsApi: PropTypes.shape({
      getAvailable: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleSearch = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const selectedZones = this.getCheckedValuesFromForm(event.target);
    const searchedDomainName = document.getElementById('domainName').value;
    const requestedDomains = this.getCombinedNameAndZones(searchedDomainName, selectedZones);
    this.props.onSearchStart(requestedDomains);

    this.props.domainsApi
      .getAvailable(requestedDomains)
      .then((response) => {
        const { availableDomains } = response;
        this.props.onSearchFinish(availableDomains);
      })
      .catch(err => console.log);
  }

  getCheckedValuesFromForm = (form) => {
    const allCheckboxes = Array.from(form.getElementsByClassName('domainZone'));
    return allCheckboxes.reduce((zones, checkbox) => {
      if (checkbox.checked) return [...zones, checkbox.value];
      return zones;
    }, []);
  }

  getCombinedNameAndZones = (name, zones) => zones.map(z => name.concat(z));

  render() {
    return (
      <form className="form" onSubmit={this.handleSearch}>
        <fieldset>
          <label htmlFor="domainName">Check for free domain names</label>
          <input id="domainName" />
          <br />
        </fieldset>
        <fieldset>
          <label htmlFor="com">.com</label>
          <input defaultChecked type="checkbox" className="domainZone" id="com" value=".com" />
          <label htmlFor="org">.net</label>
          <input defaultChecked type="checkbox" className="domainZone" id="org" value=".net" />
          <br />
        </fieldset>
        <fieldset>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    )
  }
}