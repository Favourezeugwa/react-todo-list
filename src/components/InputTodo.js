import React, { Component } from 'react'

class InputTodo extends Component {
  state = {
    title: ''
  }

  onChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Add Todo..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo

/* In this InputTodo component, we are using this.onChange and this.state.title 
because the method is a part of the class */