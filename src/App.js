import './App.css';
import TodoApp from './components/TodoApp';
import {TodosProvider} from './context/todos.context'

function App() {
  return (
    <div className="App">
      <TodosProvider>
          <TodoApp />
     </TodosProvider>
    </div>
  );
}

export default App;
