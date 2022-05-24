import React, { useContext,useState } from 'react';
import {DispatchContext} from '../context/todos.context';
import EditTodoForm from './EditTodoForm';
import './Todo.css';

function Todo({id,todo,completed}) {
    const dispatch = useContext(DispatchContext);
    const [isEdit,setIsEdit] = useState(false);
    const handleEdit =()=>{
        setIsEdit(!isEdit)
    }

  return (
        isEdit ? <EditTodoForm  id={id} todo={todo} toggleEdit={handleEdit}  /> :
     <div className='Todo'>

<button 
className='Todo-toggle-btn'
onClick={()=>dispatch({type:"TOGGLE",id:id})}
>
  <i className={completed ? "fas fa-check-square fa-2x" : "fas fa-square fa-2x" }/>
</button>

        <li className={completed ? "Todo-task completed" : '' }  >
          {todo}
          </li>
      <div className='Todo-buttons'>
        <button onClick={handleEdit}>
          <i className="fas fa-pen" />
        </button>
        <button onClick={()=>dispatch({type:"REMOVE",id:id})}>
           <i className="fas fa-trash"/>
        </button>
      </div>
    </div>
    
      
  )
}

export default Todo