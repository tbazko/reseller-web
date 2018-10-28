import React, { Component } from 'react';
import './BuyDomainForm.css';

export default class BuyDomainForm extends Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    fetch('http://localhost:5000/customers/create', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'additionalInfo-Type': 'application/json; charset=utf-8',
        // "additionalInfo-Type": "application/x-www-form-urlencoded",
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(this.state), // body data type must match "additionalInfo-Type" header
    });
  }

  handleChange = (event) => {
    const { id, type, value, checked } = event.target;
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
          <fieldset>
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
          <fieldset>
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
          <fieldset>
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
          <fieldset>
            <button type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
