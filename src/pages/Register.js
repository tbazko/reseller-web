import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Register.css';

export default class BuyDomainForm extends Component {
  static propTypes = {
    selectedDomain: PropTypes.string,
    userApi: PropTypes.shape({
      register: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    selectedDomain: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastname: '',
      middlename: '',
      hosting: false,
      email: '',
      password: '',
      city: '',
      postIndex: '',
      street: '',
      house: '',
      room: '',
      codeoperator: '',
      phonenumber: '',
      additionalInfo: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { userApi, selectedDomain } = this.props;

    userApi
      .register(this.state)
      .catch(err => console.log);

    if (selectedDomain.length > 0) {
      userApi
        .saveUserDomain(selectedDomain)
        .catch(err => console.log);
    }
  }

  handleChange = (event) => {
    const {
      id, type, value, checked,
    } = event.target;
    this.setState({ [id]: type === 'checkbox' ? checked : value });
  }

  render() {
    const {
      name,
      lastname,
      middlename,
      hosting,
      email,
      password,
      city,
      postIndex,
      street,
      house,
      room,
      codeoperator,
      phonenumber,
      additionalInfo,
    } = this.state;

    return (
      <div>
        <p>
          согласно GDPR еще надо делать поле айпи адресс
        </p>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="row">
            <fieldset className="active">
              <label htmlFor="name">Імя :</label>
              <input onChange={this.handleChange} id="name" name="name" type="text" placeholder="укажите имя" defaultValue={name} />
              <br />
              <label htmlFor="lastname">Прізвище :</label>
              <input onChange={this.handleChange} id="lastname" name="lastname" type="text" placeholder="Прізвище" defaultValue={lastname} />
              <br />
              <label htmlFor="middlename">По батькові :</label>
              <input onChange={this.handleChange} id="middlename" name="middlename" type="text" placeholder="По батькові :" defaultValue={middlename} />
              <br />
              <label htmlFor="hosting">Вам потрібен хостинг? </label>
              <input onChange={this.handleChange} id="hosting" type="checkbox" checked={hosting} />
              <br />

              <label htmlFor="email">Ваша Аккаунт:</label>
              <br />
              <input onChange={this.handleChange} id="email" name="email" type="email" placeholder="Email" defaultValue={email} />
              <br />
              <input onChange={this.handleChange} id="password" type="text" placeholder="password" defaultValue={password} />
              <br />
              <label htmlFor="password">Ваш пароль буде заданий або надісланий</label>
            </fieldset>
            <fieldset className="close">
              Додаткова інформація
              <br />
              <input onChange={this.handleChange} id="city" name="city" type="text" placeholder="Місто" defaultValue={city} />
              <br />
              <input onChange={this.handleChange} id="postIndex" name="postIndex" type="text" placeholder="Поштовий індекс" defaultValue={postIndex} />
              <br />
              <input onChange={this.handleChange} id="street" name="street" type="text" className="form-control" placeholder="Ваша адреса" defaultValue={street} />
              <br />
              <input onChange={this.handleChange} id="house" name="house" type="text" className="form-control" placeholder="номер будинку" defaultValue={house} />
              <input onChange={this.handleChange} id="room" name="room" type="text" className="form-control" placeholder="Кімната" defaultValue={room} />
            </fieldset>
            <fieldset className="close">
              <input
                onChange={this.handleChange}
                id="codeoperator"
                name="codeoperator"
                type="text"
                placeholder="Код"
                defaultValue={codeoperator}
              />
              <input
                onChange={this.handleChange}
                id="phonenumber"
                name="phonenumber"
                type="text"
                placeholder="Телефон"
                defaultValue={phonenumber}
              />
              <br />
              <label htmlFor="additionalInfo">Додаткова інформація :</label>
              <br />
              <textarea
                onChange={this.handleChange}
                name="additionalInfo"
                id="additionalInfo"
                rows="10"
                cols="45"
                type="textarea"
                placeholder="Сообщение"
                defaultValue={additionalInfo}
              />
            </fieldset>
            <fieldset className="submitClass">
              Шаг
              <label htmlFor="submit"> 1 </label>
              из 4
              <br />
              <button name="submit" type="submit">
                Реєстрація
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}
