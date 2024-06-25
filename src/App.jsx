import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('')
  const [items, setItems] = useState([])

  const addItem = () => {
    if (!todo) {
      alert('todo giriniz')
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: todo
    }
    setItems((list)=> [...list, item] )
    setTodo('')
    console.log(item)
  }
  return (
    <>
      <input type="text"
        onChange={e => setTodo(e.target.value)}
        placeholder='add an todos'
        value={todo} />
      <button onClick={addItem}>add</button>
      {items.map((item)=> <li key={item.id}>{item.value} </li>)}
    </>
  )
}

export default App;