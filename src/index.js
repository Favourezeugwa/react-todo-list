import React from 'react';
import ReactDOM from 'react-dom';

// Component file
import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/App.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);

// strict mode enable checks and warning not only for the component but also its descendants
