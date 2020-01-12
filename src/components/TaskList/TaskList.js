import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({ items, onOpenTask }) =>
  items.length > 0 && (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id}>
            <Task {...item} onOpenTask={() => onOpenTask(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  );

TaskList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onOpenTask: PropTypes.func.isRequired,
};

export default TaskList;
