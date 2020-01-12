import React, { Component } from 'react';
import axios from 'axios';
import TaskList from '../TaskList/TaskList';
import DataTask from '../DataTask/DataTask';
import styles from './TaskEditor.module.css';

export default class TaskEditor extends Component {
  state = {
    tasks: [],
    fullTask: [],
  };

  async componentDidMount() {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          tasks: response.data,
        });
      });

    this.setState(state => ({
      tasks: state.tasks
        .reduce((acc, task) => {
          acc.push(task, (task.completed = false));
          return acc;
        }, [])
        .filter(el => el % 2 !== 0),
    }));
  }

  onOpenTask = id => {
    this.setState(state => ({
      fullTask: state.tasks.filter(task => task.id === id),
    }));
  };

  onDeleteTask = id => {
    this.setState(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    }));
    this.reset();
  };

  reset = () => {
    this.setState({
      fullTask: [],
    });
  };

  updateCompleted = id => {
    this.setState(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  render() {
    const { tasks, fullTask } = this.state;

    return (
      <div className={styles.container}>
        <TaskList items={tasks} onOpenTask={this.onOpenTask} />
        <DataTask
          fullTask={fullTask}
          onDeleteTask={this.onDeleteTask}
          onCompleted={this.onCompleted}
          onUpateCompleted={this.updateCompleted}
        />
      </div>
    );
  }
}
