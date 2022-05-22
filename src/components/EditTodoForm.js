import { useContext } from "react";
import { DispatchContext } from "../context/todos.context";
import useFormInput from '../hooks/useFormInput';


function EditTodoForm({id,todo,toggleEdit}) {
    const dispatch = useContext(DispatchContext);
    const [task,handleChange,reset] = useFormInput(todo);
    const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch({type:"EDIT",id:id,task:task});
    reset();
    toggleEdit()
}
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={task}
        onChange={handleChange}
        />
        <button>Save</button>
    </form>
  )
}

export default EditTodoForm