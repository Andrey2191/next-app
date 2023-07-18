import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../actions';

function Task({ task }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <li
      className={`task ${task.completed ? 'completed' : ''}`}
      onClick={handleToggle}
    >
      {task.text}
      <button className="remove-button" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
}

export default Task;