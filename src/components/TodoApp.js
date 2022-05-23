import React from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import './TodoApp.css'

function TodoApp() {
  return (
    <div className='TodoApp'>
      <h1>TodoList
     <span>A simple React TodoList App</span>
     </h1>
      <TodoList />
      <AddTodoForm />
    </div>
  )
}

export default TodoApp
