import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";


export type createContextType = {
  id: string;
  todo: string;
  status: boolean
}

export type contextType = {
  todos: createContextType[];
  todoHandler: (todo: createContextType) => void;
  toggleStatus: (id: string, status: boolean) => void
  deleteTodo: (id: string) => void
}

// createContext

export const todoContext = createContext<contextType | null>(null)



// Context Provider 

export const TodoProvider = ({ children }: { children: ReactNode }) => {

  const [todos, setTodos] = useState<createContextType[]>([{id: Date().toString(), todo:"This is default Todo text, you can delete it", status: true}])

  const todoHandler = (todo: createContextType) => {
    setTodos(prev => [...prev, todo])
  }

  const toggleStatus = (id: string, status: boolean) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status } : todo
    )
    setTodos(updatedTodos)

  }
  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo)=> todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <todoContext.Provider value={{ todos, todoHandler, toggleStatus, deleteTodo }}>
      {children}
    </todoContext.Provider>
  )
}




// Context Consumer 
export const useTodoConsumer = (): contextType => {
  const contextConsumer = useContext(todoContext)
  if (!contextConsumer) {
    throw new Error("outside of Provider")
  }
  return contextConsumer
}