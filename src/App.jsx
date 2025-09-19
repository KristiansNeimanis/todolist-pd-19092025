import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");


  return (
    <>
      <h1>To-Do List</h1>

      <div className="card">
        <input type="text" id='task' placeholder='Task name here' onChange={newTask => setTask(newTask)}/>
        <button onClick={() => setTask((newTask) => document.getElementById("tasks").append(document.createElement("li").innerHTML = document.getElementById("task").innerHTML, console.log(newTask)))}>Save</button>
      </div>

      <div id='tasks'></div>
    </>
  )
}

export default App
