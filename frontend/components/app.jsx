import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todo_list/todo_list_container';

const App = (todos) => {
  return (
    <div>
      <h1>CLAYS TODOS</h1>
      <TodoListContainer/>
    </div>
  );
};

export default App;
