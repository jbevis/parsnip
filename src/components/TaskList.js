import React from 'react';
import Task from './Task';

const TaskList = props => {
  return (
    <section className="task-list">
      <h3 className="task-list-title">
        <strong>{props.status}</strong>
      </h3>
      {props.tasks.map(task => (
        <Task
          key={task.id} 
          task={task} 
          onStatusChange={props.onStatusChange}
        />
      ))}
    </section>
  );
}

export default TaskList;
