import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");


  return (
    <>
      <h1>To-Do List</h1>

      <div className="card">
        <input type="text" id='task' placeholder='Task name here'/>
        <button onClick={() => setTask(() => document.getElementById("tasks").append(document.createElement("li").value = document.getElementById("task").value, console.log(document.getElementById("task"))))}>Add</button>
      </div>

      <div id='tasks'></div>
    </>
  )
}

export default App
