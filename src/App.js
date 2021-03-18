import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  const [tasks,setTasks] = useState([])

useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
},[])

const fetchTasks = async () =>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  console.log(data)
 return data
}

const fetchTask = async (id) =>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  console.log(data)
 return data
}

//Show Add Task
const [showAddTask,setShowAddTask] = useState(false)

//Add Task
const addTask = async (task) =>{
 const res = await fetch('http://localhost:5000/tasks/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const newTask = await res.json()
  setTasks([...tasks,newTask])
}

//Delete Task
const deleteTask = async (id) =>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE'
  })

  setTasks(
    tasks.filter((task) => task.id !== id)
    )
}



const toggleRemider = async (id) =>{
  const taskToToggle = await fetchTask(id)
  const uploadTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(uploadTask)
  })

  const uploadedTask = await res.json()
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder:  uploadedTask.reminder}: task
    )
  )
}


  const name = 'Lewis Maina Muriuki'

  return (
    <div className="container">
      <h2>Hello, { name }</h2>
      <Header showAddTask={showAddTask} onAdd={() =>setShowAddTask(!showAddTask)} title = "My Task Tracker" />
      {showAddTask && <AddTask onAdd={addTask}/> }
      {
        tasks.length > 0 ? (<Tasks tasks = { tasks } onToggle = {toggleRemider} onDelete={deleteTask}/>)
        : 'You have no tasks'
      }
      <Footer />
    </div>
  );
}

export default App;
   