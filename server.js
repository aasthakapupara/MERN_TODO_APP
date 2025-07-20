const express = require('express');
//import mongoose that connects MongoDB to Node.js
const mongoose = require('mongoose');
//import bodyParser that helps parse incoming JSON request bodies.
const bodyParser = require('body-parser');
//import Cross-Origin Resource Sharing (CORS), allowing the frontend and backend //to communicate
const cors = require('cors');

//initialise express app
const app = express(); 
const PORT = process.env.PORT || 5000;    
//apply middleware
app.use(bodyParser.json());
app.use(cors());        

//connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mern_todo_app');    

//Define the Task Schema & Model; taskSchema defines a schema for tasks
const taskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
});
const Task = mongoose.model('Task', taskSchema);    //represent tasks collection

//GET: Fetch all Tasks from database
app.get('/api/tasks', async (req, res) => {
try {
    const tasks = await Task.find();  //retrieve all task documents
    res.json(tasks);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
}
}); 
//POST: Add a new Task to the database
app.post('/api/tasks', async (req, res) => {
    const newTask = new Task(req.body);  //Create a new task instance
try {
    const savedTask = await newTask.save();  //Saves the task in MongoDB
    res.json(savedTask);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
}
});
// PUT: Update a Task
app.put('/api/tasks/:id', async (req, res) => {
try {
    const updatedTask = await Task.findByIdAndUpdate( req.params.id,   //finds a task by id
    req.body,            // updates it with new data
    { new: true }    // Ensures the response contains the updated task
    );
    res.json(updatedTask);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
   }
});
// DELETE: Remove a Task
app.delete('/api/tasks/:id', async (req, res) => {
try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.json(deletedTask);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
}
});
// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
