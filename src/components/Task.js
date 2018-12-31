import React from 'react';

const Task = props => {
  return (
    <section className="task">
      <header className="task-header">
        <h5>{props.task.title}</h5>
      </header>
      <hr />
      <p className="task-body">{props.task.description}</p>
    </section>
  );
}

export default Task;
