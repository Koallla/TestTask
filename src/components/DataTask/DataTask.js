import React from 'react';
import PropTypes from 'prop-types';
import styles from './DataTask.module.css';

const DataTask = ({ fullTask, completed, onDeleteTask, onUpateCompleted }) => {
  return (
    fullTask.length > 0 && (
      <div className={styles.task}>
        {fullTask.map(item => (
          <div key={item.id}>
            <p className={styles.text}>{item.body}</p>
            <div className={styles.actions}>
              <button
                className={styles.btn}
                type="button"
                onClick={() => onDeleteTask(item.id)}
              >
                Delete
              </button>
              <label>
                Completed:
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={completed}
                  onChange={() => onUpateCompleted(item.id)}
                />
                {completed && <div>Hello</div>}
              </label>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

DataTask.propTypes = {
  fullTask: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpateCompleted: PropTypes.func.isRequired,
};

export default DataTask;
