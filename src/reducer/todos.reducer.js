
function todosReducer(state,action){
switch(action.type){
    //Add todos method
    case "ADD":
    return [...state,action.task];
    case "REMOVE":
        return state.filter(todo=>todo.id !== action.id );
    case "EDIT":
        return state.map(todo => todo.id === action.id ? {...todo,task:action.task} : todo);
    case "TOGGLE":
        return state.map(todo => todo.id === action.id ? {...todo,completed:!todo.completed} : todo);
     default:
        return state;
}
}


export default todosReducer;