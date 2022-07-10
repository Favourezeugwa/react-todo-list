import React from 'react';
import PropTypes, { Object } from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  // a method called when the delete button is clicked
  componentWillUnmount() {
    console.log('cleaning up...');
  }

  // to edit todo using the refernce handler
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  // Detecting when the users press the Enter key to submit edited items
  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    const { completed, id, title } = todo;
    const { editing } = this.state;

    // logic to dynamically hide/displlay the todos/text field
    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
          <button
            type="submit"
            onClick={() => deleteTodoProps(id)}
          >
            Delete
          </button>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;

/*
  When an the input field is created, it uses the default HTML behaviour
   because it is being handled by the DOM.
  React doesn't work that way.Inorder to fix it, we need to make sure that
   the value prop of the text input is not null or undefined.
  Simply update the input field by adding value={title}.
   we have access to the title directly in this component.
*/

/*
You cannot change the edit field unless you control it.
You must add an onChange handler/event inorder to control.
onchange={}
*/

/*
We need to ensure that there is communication between parent and child component
 by raising an event from the TodoItem component and handle it in the TodoContainer.
In the TodoContainer, a method setUpdate will be written, and passed to the TodosList
 component through props (still in the todoscontainer file).<TodosList setUpdate={this.setUpdate} />
From there, we can pass it to the TodoItem component. In TodoList
 component file, update the < TodoItem/>
Finally, in the TodoItem Component file, update the onChange to point at setUpdate() method.
*/

/*
We need to update the items in the Todocontainer file state object.
We do this by making us of the setState() method.
 so update the setUpdate() by adding setState in the TodoContainer.js file
*/

/*
As soon as we submit the edited value, we need to trigger a
 method that resets the edit mode to false thereby hiding the edit field.
To do this, we listen for a keydown event (onKeyDown) that fires any key pressed,
 then we check for the enter key using event.key
*/
