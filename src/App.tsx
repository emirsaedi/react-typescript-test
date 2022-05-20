import { useState } from 'react'

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

import { Todo } from './todo.model'

const App = () => {
  const [todo, setTodo] = useState<Todo[]>([])

  const todoAddHandler = (todoText: string) => {
    setTodo(prevState => [
      ...prevState,
      { id: Math.random().toString(), text: todoText },
    ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodo(prevState => prevState.filter(state => state.id !== todoId))
  }

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todo} onDeleteTodo={todoDeleteHandler} />
    </div>
  )
}

export default App
