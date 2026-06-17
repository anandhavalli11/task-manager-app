.

🚀 Task Manager App (MERN Stack)

A full-stack Task Management Web Application built using MongoDB, Express, React, Node.js (MERN Stack) with authentication and full CRUD features.

✨ Features
🔐 User Register & Login (JWT Authentication)
📝 Add Tasks
✏️ Edit Tasks
🗑️ Delete Tasks
✔️ Mark Tasks as Completed
🎨 Clean Modern UI
⚡ Instant Updates (No page refresh needed)
🛠️ Tech Stack

Frontend:

React (Vite)
Axios
CSS

Backend:

Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
bcryptjs
📁 Project Structure
task-manager-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── styles.css
│
├── screenshots/
│   ├── login.png
│   ├── register.png
│   ├── tasks.png
│   ├── edit.png
│
└── README.md
🚀 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/task-manager-app.git
2️⃣ Backend Setup
cd backend
npm install

Create .env file:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000

Run backend:

node server.js
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🌐 API Endpoints
🔐 Auth Routes
POST /api/auth/register
POST /api/auth/login
📋 Task Routes
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
🔥 Future Improvements
🌙 Dark Mode
📱 Mobile Responsive UI
📅 Due Dates for Tasks
🎯 Priority System (High / Medium / Low)
🔔 Notifications System
👨‍💻 Author

Anandha Valli V

📸 Screenshots
🔐 Login Page

📝 Register Page

📋 Task Dashboard

✏️ Edit Task Feature

✔️ Completed Task View

⭐ Support

If you like this project, please give a ⭐ on GitHub and feel free to improve it!
