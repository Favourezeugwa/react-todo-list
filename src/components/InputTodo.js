import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  // onsubmit of the form and validation(check for white space)
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;

/* In this InputTodo component, we are using this.onChange and this.state.title
because the method is a part of the class */
