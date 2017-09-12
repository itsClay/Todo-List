import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="todo-list-item">{ this.props.todo.title }</li>
    );
  }
}

export default TodoListItem;
