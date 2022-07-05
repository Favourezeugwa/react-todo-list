import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  // onsubmit of the form and validation(check for white space)
  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;

    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    }
  }

  render() {
    const { title } = this.state;

    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;

/* In this InputTodo component, we are using this.onChange and this.state.title
because the method is a part of the class */
