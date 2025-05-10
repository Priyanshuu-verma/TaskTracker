import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async (task) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/tasks`, task);
      setTasks([...tasks, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = async (id, completed) => {
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/tasks/${id}`, { completed });
      setTasks(tasks.map(task => 
        task._id === id ? { ...task, completed } : task
      ));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <Router>
      <div className="App">
        <Navbar filter={filter} setFilter={setFilter} />
        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
                <TaskForm addTask={addTask} />
                <TaskList 
                  tasks={filteredTasks} 
                  updateTask={updateTask} 
                  deleteTask={deleteTask} 
                />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;