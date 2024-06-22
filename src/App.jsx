import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState('')
  const [task, setTask] = useState([])

  const addItem = () => {
    if (!todo) {
      alert("please task add")
    }
    setTask(todo)
  
  }

  const todoValue = (e) => {
    setTodo(e.target.value)
  }

  return (
    <>
      <div className='App'>
<input type="text" placeholder='add an Item' onChange={todoValue}/>
<button className='btn-add' onClick={() => addItem()} >Add</button>
      </div>
      <ul>
        {task}
      </ul>
    </>
  )
}

export default App
