const allTodos = (state) => {
  const todoIds = Object.keys( state.todos ).map( (id) => state.todos[id] );
  return todoIds;
};

export default allTodos;
