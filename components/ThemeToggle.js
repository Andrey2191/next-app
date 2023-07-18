import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../actions';

function ThemeToggle() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(updatedTheme));
  };

  return (
    <div className="theme-toggle">
      <button onClick={handleToggleTheme}>
        Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
      </button>
    </div>
  );
}

export default ThemeToggle;