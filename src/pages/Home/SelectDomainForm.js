import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

export default class SelectDomainForm extends Component {
  static propTypes = {
    domains: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableDomains: PropTypes.arrayOf(PropTypes.string),
    onDomainSelected: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    availableDomains: null,
  }

  componentDidUpdate() {
    this.updateDomainAvailabilityStatus();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const selectedDomain = document.querySelector('input[name="requestedDomain"]:checked').value;
    this.props.onDomainSelected(selectedDomain);
    this.props.history.push('/register');
  }

  updateDomainAvailabilityStatus() {
    const domainLabels = Array.from(document.getElementsByClassName('requestedDomain'));
    domainLabels.forEach((element) => {
      if (!this.props.availableDomains) return;

      if (this.props.availableDomains.indexOf(element.innerText) !== -1) {
        element.previousElementSibling.innerText = 'Available ';
      } else {
        element.previousElementSibling.innerText = 'Busy ';
        element.nextElementSibling.disabled = true;
      }
    });
  }

  render() {
    const { availableDomains, domains } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {domains.map(domain => (
          <fieldset key={domain}>
            <span className="domainStatus">Loading...&nbsp;</span>
            <label htmlFor={domain} className="requestedDomain">{domain}</label>
            <input type="radio" id={domain} name="requestedDomain" value={domain} />
          </fieldset>
        ))}
        {availableDomains && availableDomains.length > 0 && <button type="submit">Submit</button>}
      </form>
    );
  }
}
