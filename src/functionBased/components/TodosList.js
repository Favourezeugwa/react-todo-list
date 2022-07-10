import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    // console.log(todos);
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
