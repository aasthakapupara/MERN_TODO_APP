# 📝 MERN ToDo App

A full-stack ToDo List application built using the MERN stack: **MongoDB**, **Express.js**, **React.js**, and **Node.js**.

## 🚀 Features

- ✅ Add, update, delete, and view tasks
- 🔁 Real-time updates (frontend reflects backend changes)
- 🧩 Clean API structure using Express and Mongoose
- 🌐 CORS-enabled for cross-origin frontend-backend communication

## 📁 Project Structure

```text
mern-todo-app/
├── backend/
│   ├── server.js                 # Express server with API routes
│   └── models/Task.js            # Mongoose schema (if separated)
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js                # Main React component
│   │   ├── App.css               # Styling file
│   │   ├── index.js              # React entry point
│   │   └── components/           # Optional reusable components
├── README.md
├── package.json (in both frontend and backend)
```
## ⚙️ How to Run the App Locally

### 🔧 Requirements

* Node.js and npm installed
* MongoDB running locally or via MongoDB Atlas

### 🖥 Backend Setup

1. Open terminal and navigate to the `backend` folder:

```bash
cd backend
npm install
node server.js
```
> Starts the backend server on **[http://localhost:5000](http://localhost:5000)**

### 🌐 Frontend Setup

1. Open a new terminal and navigate to the `frontend` folder:

```bash
cd frontend
npm install
npm start
```
> Starts the React app on **[http://localhost:3000](http://localhost:3000)**

## 🌐 API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/tasks`     | Get all tasks |
| POST   | `/api/tasks`     | Create a task |
| PUT    | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## 🛠️ Built With

* **Frontend:** React.js, JSX, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose)
* **Middleware:** CORS, body-parser

## ⚠️ Notes

* The MongoDB URI is currently hardcoded as `mongodb://127.0.0.1:27017/mern_todo_app`. To make it environment-based:

  1. Install `dotenv` in your backend
  2. Create a `.env` file and use `process.env.MONGO_URI` in `mongoose.connect()`

## 📄 License

This project is open-source and free to use for educational and personal purposes.
