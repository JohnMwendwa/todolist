
function todosReducer(state,action){
switch(action.type){
    //Add todos method
    case "ADD":
    return [...state,action.task];
    

}
}


export default todosReducer;