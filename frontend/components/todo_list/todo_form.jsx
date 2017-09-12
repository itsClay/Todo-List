import React from 'react';
import uniqueId from './unique_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
    };
    this.linkState = this.linkState.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  handleInput(e) {
    e.preventDefault();
    const todo = Object.assign({}, {id: uniqueId()}, this.state);
    // console.log(todo);
    this.props.receiveTodo(todo);
  }
  // using controlled inputs to keep track of form data
  render() {
    // console.log(this.props);
    return(
      <form>
        <h3>Add a Todo</h3>
        <label> Title:
          <input
            value={this.state.title}
            onChange={ this.linkState('title') } >
          </input>
        </label>
        <label> Description:
          <input
            value={this.state.body}
            onChange={ this.linkState('body') } >
          </input>
        </label>
        <button onClick={this.handleInput}>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
