import React, { Component } from 'react';


class Login extends Component {
  render() {
    return (
      <div className="login">
        <form className="login__form">
          <h2 className="form__header">Log In</h2>
          <label className="form__label" for="user">Username</label>
          <input className="form__input" id="user" type="text"></input>
          <label className="form__label" for="password">Password</label>
          <input className="form__input" id="password" type="password"></input>
          <small className="form__text">New to Ebooking? <a href="/register">Create your account</a></small>
          <input className="form__input input--submit" type="submit" value="Log in"></input>
        </form>
      </div>
    );
  }
}

export default Login;
