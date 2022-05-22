import React, { useContext,useState } from 'react';
import {DispatchContext} from '../context/todos.context';
import EditTodoForm from './EditTodoForm';


function Todo({id,todo}) {
    const dispatch = useContext(DispatchContext);
    const [isEdit,setIsEdit] = useState(false);
    const handleEdit =()=>{
        setIsEdit(!isEdit)
    }
  return (
        isEdit ? <EditTodoForm  id={id} todo={todo} toggleEdit={handleEdit}  /> :
     <div>
        <li>{todo}</li>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={()=>dispatch({type:"REMOVE",id:id})}>Delete</button>
    </div>
    
      
  )
}

export default Todo