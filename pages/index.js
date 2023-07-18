import React from 'react';
import { useSelector } from 'react-redux';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import FilterOptions from '../components/FilterOptions';
import ThemeToggle from '../components/ThemeToggle';

function Home() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`app ${theme}`}>
      <h1>Task List</h1>
      <TaskForm />
      <TaskList />
      <FilterOptions />
      <ThemeToggle />
    </div>
  );
}

export default Home;