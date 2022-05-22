import React from 'react'
import Todo from './Todo'

function TodoList() {
  return (
    <div>
        {todos.map(todo =>(
            <Todo 
            id={todo.id}
            todo={todo.task}
            />
        ))}
    </div>
  )
}

export default TodoList