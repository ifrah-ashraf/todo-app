import { useState } from 'react'
import EditTodo from './components/EditTodo'
import DeleteTodo from './components/DeleteTodo'
import './App.css'

function App() {
  const [inputs, setInputs] = useState('')
  const [todos, setTodos] = useState([])

  function newTodo (index , newInput) {
    let updatedTodo = [...todos]
    updatedTodo[index]=newInput
    setTodos(updatedTodo)
  }

  function delTodo(index){
    const newTodo = todos.filter((todo ,i)=>(
      (i !== index ? todo : null)
    ))
    setTodos(newTodo)
  }

  return (
    <>
      <h2>To-Do</h2>
      <input type="text" value={inputs} onChange={(e) => setInputs(e.target.value)} />

      <button onClick={() => {
        setTodos([...todos, inputs])
      }}>Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <EditTodo  index={index} todo={todo} newTodo={newTodo}/>
            <DeleteTodo index={index} delTodo={delTodo} />
          </li>
        )
        )}
      </ul>
    </>
  )
}

export default App
