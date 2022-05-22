import React, { useContext } from 'react'
import Todo from './Todo'
import {TodosContext} from '../context/todos.context'
import './TodoList.css';
function TodoList() {
    const todos = useContext(TodosContext);
    const tasks = todos.map(todo =>(
      <Todo 
      key={todo.id}
      id={todo.id}
      todo={todo.task}
      />
  ))
  return (
    <div className='TodoList'>
     <ul>{tasks}</ul>
    </div>
  )
}

export default TodoList