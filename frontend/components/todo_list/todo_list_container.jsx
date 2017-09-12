import { connect } from 'react-redux';
import allTodos from '../../reducers/selectors';
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  // receiveTodos: todos => dispatch(receiveTodos(todos))
});

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoContainer;
