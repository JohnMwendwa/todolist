import React, { useContext } from 'react';
import useFormInput from '../hooks/useFormInput'
import {DispatchContext} from '../context/todos.context';
import {v4 as uuid} from 'uuid';
import './AddTodoForm.css'

function AddTodoForm() {
  const dispatch = useContext(DispatchContext);
  const [task,handleChange,reset] = useFormInput("");
  const handleSubmit =(e)=>{
    e.preventDefault();
    const newTodo ={task,id:uuid(),completed:false}
    dispatch({type:"ADD",task:newTodo});
    reset();
  }
  return (
    <form onSubmit={handleSubmit} className='AddTodoForm'>
        <input 
        type="text" 
        value={task}
        onChange={handleChange}
        />
        <button>Add Task</button>
    </form>
  )
}

export default AddTodoForm