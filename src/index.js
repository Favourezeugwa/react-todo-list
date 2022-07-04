import React from 'react'
import ReactDOM from 'react-dom'
import TodoContainer from './components/TodoContainer'


ReactDOM.render(
  <React.StrictMode>  
    <TodoContainer/>
  </React.StrictMode>, 
document.getElementById('root')
)

// strict mode enable checks and warning not only for the component but also its descendants