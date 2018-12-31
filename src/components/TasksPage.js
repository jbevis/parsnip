import React, { Component } from 'react';
import TaskList from './TaskList';

const TASK_STATI = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
  renderTaskLists() {
    const { tasks } = this.props;

    return TASK_STATI.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);

      return <TaskList key={status} status={status} tasks={statusTasks} />
    });
  }

  render() {
    return (
      <section className="tasks">
        <section className="task-lists">
          {this.renderTaskLists()}
        </section>
      </section>
    );
  }
}

export default TasksPage;
