# 📝 Task Manager App

A full-stack Task Manager web application built using the MERN stack (MongoDB, Express, React, Node.js). This project allows users to register, login, and manage their daily tasks efficiently.

---

## 🚀 Features

- User Registration and Login (JWT Authentication)
- Secure Password Hashing (bcrypt)
- Create new tasks
- View all tasks
- Mark tasks as completed / not completed
- Delete tasks
- Protected API routes
- Real-time UI updates

---

## 🛠️ Tech Stack

### Frontend:
- React (Vite)
- Axios
- React Router DOM
- JavaScript (ES6)

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs
- dotenv

---

## 📁 Project Structure

task-manager-app/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
├── pages/
├── components/


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/task-manager-app.git
2️⃣ Backend setup
cd backend
npm install

Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

node server.js
3️⃣ Frontend setup
cd frontend
npm install
npm run dev
🌐 Running the Project
Frontend: http://localhost:5173
Backend: http://localhost:5000
📌 API Endpoints
Auth Routes:
POST /api/auth/register → Register user
POST /api/auth/login → Login user
Task Routes:
GET /api/tasks → Get all tasks
POST /api/tasks → Create task
PUT /api/tasks/:id → Update task (toggle complete)
DELETE /api/tasks/:id → Delete task
🎯 Future Improvements
Task categories
Due dates & reminders
Drag and drop UI
Deploy on cloud (Render / Vercel)
Mobile responsive design improvements
👨‍💻 Author

Anandha Valli V
