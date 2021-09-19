import React from 'react'

export default props =>
  <form onSubmit={props.handleTodoSubmit}>  
    <input
      type='text'
      autoFocus
      value = {props.currentTodo}
      onChange = {props.handleNewTodoChallenge}
      className="new-todo"
      placeholder="What needs to be done?"/>
  </form>
