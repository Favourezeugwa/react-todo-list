import React from 'react'
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  }

  // check completed and update state(either true or false)
  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    }));
  }

  // Delete Items from the todos
  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
  }

  render() {
    return (
      <div>
        < Header />
        <InputTodo />
        <TodosList 
          todos={this.state.todos} 
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoContainer