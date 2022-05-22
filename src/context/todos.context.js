import React, { createContext} from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todosReducer from '../reducer/todos.reducer'

const defaultTodos = [
    {id:1,task:"Learn coding", completed:false},
    {id:2, task:"Go shopping at the mall",completed:false}
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos,dispatch] = useLocalStorageReducer("Tasks",defaultTodos,todosReducer);

  return (
  <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
         {props.children}
      </DispatchContext.Provider>
  </TodosContext.Provider>

  )}