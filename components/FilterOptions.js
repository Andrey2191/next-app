import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowCompleted } from '../actions';

function FilterOptions() {
  const showCompleted = useSelector((state) => state.showCompleted);
  const dispatch = useDispatch();

  const handleToggleShowCompleted = () => {
    dispatch(setShowCompleted(!showCompleted));
  };

  return (
    <div className="filter-options">
      <label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={handleToggleShowCompleted}
        />
        Show completed tasks
      </label>
    </div>
  );
}

export default FilterOptions;