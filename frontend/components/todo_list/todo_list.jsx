import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { removeTodo, receiveTodo, todos } = this.props;

    return (
      <ul className="todos-list">
        {
          todos.map((todo) =>
            <div key={todo.id}>
              <TodoListItem
                todo={todo}
                removeTodo={removeTodo}
                receiveTodo={receiveTodo}/>
            </div>
          )
        }
        <TodoListForm receiveTodo={receiveTodo}/>
      </ul>
    );
  }
}

export default TodoList;
