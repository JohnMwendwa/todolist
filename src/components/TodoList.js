import React, { useContext } from 'react'
import Todo from './Todo'
import {TodosContext} from '../context/todos.context'

function TodoList() {
    const todos = useContext(TodosContext);
  return (
    <div>
        {todos.map(todo =>(
            <Todo 
            key={todo.id}
            id={todo.id}
            todo={todo.task}
            />
        ))}
    </div>
  )
}

export default TodoList