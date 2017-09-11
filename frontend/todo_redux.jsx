import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import App from './components/app';



document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');

  const store = configureStore();
  window.store = store;

  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

  ReactDOM.render( <App />, root);
});
