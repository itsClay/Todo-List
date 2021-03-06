import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';



document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;

  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

  window.allTodos = allTodos;
  window.removeTodo = removeTodo;

  ReactDOM.render( <Root store={store} />, root);
});
