
import './App.css'
import AddTodo from './Components/AddTodo'
import { TodoProvider } from './Store/TodoStore'

function App() {

  return (
    <TodoProvider>
      <AddTodo/>
    </TodoProvider>
  )
}

export default App
