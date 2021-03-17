import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


const App = () => {
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: "Doctor's Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Learn React",
        day: "Feb 6th at 11:30am",
        reminder: true,
    },
    {
        id: 3,
        text: "Learn Forex",
        day: "Feb 7th at 8:00am",
        reminder: true,
    },
    {
        id: 4,
        text: "Learn Laravel",
        day: "Feb 8th at 8:15am",
        reminder: false,
    }
])
  const name = 'Lewis Maina Muriuki'

  return (
    <div className="container">
      <h2>Hello, { name }</h2>
      <Header title = "My Task Tracker" />
      <Tasks tasks = { tasks } />
    </div>
  );
}

export default App;
   