
function todosReducer(state,action){
switch(action.type){
    //Add todos method
    case "ADD":
    return [...state,action.task];
    case "REMOVE":
        return state.filter(todo=>todo.id !== action.id );

}
}


export default todosReducer;