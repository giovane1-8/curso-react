import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from "axios";

import AddTask from "./components/addTask";
import Tasks from "./components/Tasks";
import TaskDatails from "./components/TaskDatails";


import './app.css'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    }
  ])

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setTasks(data)
    }
    fetchTasks()
  }, [])
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task;
    })
    setTasks(newTasks)
  }

  const handleTaskAddintion = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const NewTasks = tasks.filter(task => task.id !== taskId)

    setTasks(NewTasks)
  }
  return (
    <Router>  <div className="container">
      <Routes>

        <Route
          path="/"
          exact
          element={
            <>
              <AddTask handleTaskAddintion={handleTaskAddintion} />

              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>

          }
        />

        <Route path="/:taskTitle" exact element={
          <TaskDatails />
        } />
      </Routes>
    </div>
    </Router>
  );
}
export default App;