import React from 'react';

const TASK_STATI = [
  'Unstarted',
  'In Progress',
  'Completed'
];

const Task = props => { 
  return (
    <section className="task">
      <header className="task-header">
        <h5>{props.task.title}</h5>
        <select value={props.task.status} onChange={onStatusChange}>
          {TASK_STATI.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </header>
      <hr />
      <p className="task-body">{props.task.description}</p>
    </section>
  );

  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value)
  }
}

export default Task;
