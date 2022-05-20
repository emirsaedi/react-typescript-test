import { useRef } from 'react'

import './NewTodo.css'

interface NewTodoProps {
  onAddTodo: (text: string) => void
}

const NewTodo: React.FunctionComponent<NewTodoProps> = ({ onAddTodo }) => {
  const inputTextRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const inputValue = inputTextRef.current!.value

    onAddTodo(inputValue)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo text: </label>
        <input type="text" id="todo-text" ref={inputTextRef} />
      </div>
      <button>ADD TODO</button>
    </form>
  )
}

export default NewTodo
