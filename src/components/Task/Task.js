import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

const Task = ({ title, completed, onOpenTask }) => (
  <div className={styles.task}>
    <p className={styles.text}>{title}</p>

    <hr />
    <div className={styles.actions}>
      <button className={styles.btn} type="button" onClick={onOpenTask}>
        Open task
      </button>
    </div>
    {completed ? (
      <div className={styles.close}></div>
    ) : (
      <div className={styles.open}></div>
    )}
  </div>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onOpenTask: PropTypes.func.isRequired,
};

export default Task;
