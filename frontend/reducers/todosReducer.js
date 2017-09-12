import { RECEIVE_TODOS, RECEIVE_TODO,
  REMOVE_TODO } from '../actions/todo_actions';
// import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODOS:
      let newTodosState = {};
      action.todos.forEach( (todo) => {
        // re assign our state with a new one for every todo
        newTodosState = Object.assign(newTodosState, {[todo.id]: todo});
      });
      return newTodosState;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      const newState = Object.assign({}, state, newTodo);
      return newState;
    case REMOVE_TODO:
      const removeState = Object.assign({}, state);
      const todoToRemove = action.todo.id;
      delete removeState[todoToRemove];
      return removeState;
    default:
      return state;
  }
};


export default todosReducer;
