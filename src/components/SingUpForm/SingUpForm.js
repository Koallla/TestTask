import React, { Component } from 'react';
import { validateAll } from 'indicative';
import PNotify from 'pnotify/dist/es/PNotify';
import ErrorNotification from './ErrorNotification';
import styles from './SignUpForm.module.css';
import 'pnotify/dist/PNotifyBrightTheme.css';

const rules = {
  login: 'required|string',

  password: 'required|string|min:6',
};

const messages = {
  'login.required': 'Please choose a unique username for your account',
  'password.required': 'Enter a valid password.',
  'password.min': 'Password must be at least 6 characters long',
};

export default class SignUpForm extends Component {
  state = {
    login: '',
    password: '',
    errors: null,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, password } = this.state;

    validateAll({ login, password }, rules, messages)
      .then(() => {
        PNotify.info('Success!');

        this.resetForm();
        this.clearError();
      })
      .catch(errors => {
        const formattedErrors = {};
        errors.forEach(error => {
          formattedErrors[error.field] = error.message;
        });

        this.setState({
          errors: formattedErrors,
        });
      });
  };

  resetForm = () => {
    this.setState({
      login: '',
      password: '',
    });
  };

  clearError = () => {
    this.setState({
      errors: null,
    });
  };

  render() {
    const { login, password, errors } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={login}
              onChange={this.handleChange}
              name="login"
              placeholder="Enter your login"
            />
            {errors && <ErrorNotification label={errors.login} />}
          </label>
          <br />

          <label>
            <input
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
              placeholder="Enter your password"
            />
            {errors && <ErrorNotification label={errors.password} />}
          </label>

          <button className={styles.btn} type="submit">
            Sign up
          </button>
        </form>
        <div className={styles.menu}>
          <span className={styles.taskList}>My tasks list</span>
          <span className={styles.currentTask}>My current task</span>
        </div>
      </div>
    );
  }
}
