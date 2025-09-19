import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");


  return (
    <>
      <h1>To-Do List</h1>

      <div className="card">
        <input type="text" id='task' placeholder='Task name here'/>
        <button onClick={() => setTask((task) => task = document.createElement("li").value = document.getElementById("task").value, document.getElementById("tasks").append(task))}>Add</button>
      </div>

      <ul id='tasks'></ul>
    </>
  )
}

export default App
