import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.rmvTodo = this.rmvTodo.bind(this);
    this.flipStatus = this.flipStatus.bind(this);
  }

  rmvTodo(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  flipStatus(e) {
    e.preventDefault();
    const flippedTodo = Object.assign({}, this.props.todo, {done: !this.props.todo.done});
    this.props.receiveTodo(flippedTodo);
    console.log(e);
    if (this.props.todo.done === false) {
      e.currentTarget.innerText = "Done";
    } else {
      e.currentTarget.innerText = "Undo";
    }
  }
  render() {
    const {removeTodo} = this.props;
    return (
      <div>
        <li className="todo-list-item">{ this.props.todo.title }</li>
        <button onClick={this.rmvTodo}>Delete</button>
        <button onClick={this.flipStatus}>Done</button>
      </div>
    );
  }
}

export default TodoListItem;
