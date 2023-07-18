export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_TASK,
    payload: taskId,
  };
};

export const setShowCompleted = (showCompleted) => {
    return {
      type: 'SET_SHOW_COMPLETED',
      payload: showCompleted,
    };
  };

  export const setTheme = (theme) => {
    return {
      type: 'SET_THEME',
      payload: theme,
    };
  };
  
  let nextTaskId = 0;

  export const addTask = (text) => {
    return {
      type: 'ADD_TASK', 
      payload: { 
        id: nextTaskId++, 
        text, 
        completed: false 
      },
    };
  };