import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const showCompleted = useSelector((state) => state.showCompleted);

  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);
    console.log(filteredTasks);
  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;