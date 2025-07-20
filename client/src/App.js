import React, { useState, useEffect } from "react";
import axios from "axios"; //Axios is a library for making HTTP requests to server
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  useEffect(() => {
    // Fetch tasks from the server and update the state with the fetched tasks
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => setTasks(response.data));
  }, []);
  const addTask = () => {
    // Add a new task to the server
    axios
      .post("http://localhost:5000/api/tasks", {
        title: newTask,
        completed: false,
      })
      .then((response) => {
        setTasks([...tasks, response.data]); //Updates the task list
        setNewTask("");
      });
  };
  const toggleTask = (id) => {
    // Toggle task completion on the server
    axios
      .put(`http://localhost:5000/api/tasks/${id}`, {
        completed: !tasks.find((task) => task._id === id).completed,
      })
      .then((response) => {
        setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      });
  };
  const deleteTask = (id) => {
    // Delete a task on the server
    axios.delete(`http://localhost:5000/api/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };
  return (
    //render the UI
    <div>
      <h1>MERN Todo App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task._id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
