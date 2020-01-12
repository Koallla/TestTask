/* eslint-disable react/prefer-stateless-function */
/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import TaskEditor from '../TaskEditor/TaskEditor';
import SignUpForm from '../SingUpForm/SingUpForm';
import styles from './App.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <SignUpForm />
        <TaskEditor />
      </div>
    );
  }
}
