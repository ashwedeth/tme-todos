import { createAction } from 'redux-actions';

export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const DELETE_TODO = 'todos/DELETE_TODO';
export const EDIT_TODO = 'todos/EDIT_TODO';

export const todoActionCreators = {
  addTodo: createAction(ADD_TODO),
  toggleTodo: createAction(TOGGLE_TODO),
  deleteTodo: createAction(DELETE_TODO),
  editTodo: createAction(EDIT_TODO),
};
