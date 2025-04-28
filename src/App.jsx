import { useEffect, useState } from "react";
import ProgressTracker from "./components/ProgressTracker";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import './Style.css';

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  })

  const addTask = (task)=>{
    setTasks([...tasks,task])
  }

  const deleteTask = (index)=>{
       setTasks(tasks.filter((_,i)=> i != index))
  }

  const updateTask = (index, updatedTask)=>{
       let newtasks = [...tasks];
       newtasks[index] = updatedTask
       setTasks(newtasks);
  }
  return (
    <div className="App">
      <header>
        <h1 className='title'>TaskBuddy</h1>
        <p className='tagline'>Your Friendly Task Manager</p>
      </header>
      <TaskForm addTask={addTask}/>
      <TaskList tasks = {tasks} deleteTask = {deleteTask} updateTask={updateTask} />
      <ProgressTracker tasks = {tasks}/>
    </div>
  )
}