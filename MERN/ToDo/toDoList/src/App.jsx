import { useState } from 'react'
import Create from './components/Create'
import Display from './components/Display'
import './App.css'

function App() {
  const [toDo, setToDo] = useState([]) 

  return (
    <>
      <Create toDo={toDo} setToDo={setToDo} />
      <Display toDo={toDo} setToDo={setToDo} />
    </>
  )
}

export default App