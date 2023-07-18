import { combineReducers } from 'redux';

const initialState = {
  tasks: [],
  showCompleted: true,
  theme: 'light',
};

function tasksReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
}

function showCompletedReducer(state = initialState.showCompleted, action) {
  switch (action.type) {
    case 'SET_SHOW_COMPLETED':
      return action.payload;
    default:
      return state;
  }
}

function themeReducer(state = initialState.theme, action) {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  showCompleted: showCompletedReducer,
  theme: themeReducer,
});