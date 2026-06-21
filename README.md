# 🚀 Task Manager App (MERN Stack)

A full-stack Task Management Web Application built using **MongoDB, Express, React, and Node.js (MERN Stack)**.  
This project includes user authentication and full CRUD task management features.

---

## 🚀 Features

- 🔐 User Register & Login (JWT Authentication)  
- 📝 Add Tasks  
- ✏️ Edit Tasks  
- 🗑️ Delete Tasks  
- ✔️ Mark Tasks as Completed  
- 🎨 Clean Modern UI  
- ⚡ Instant Updates (No refresh needed)  

---

## 🧑‍💻 Tech Stack

**Frontend**
- React.js  
- Axios  
- CSS  

**Backend**
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  

---

## 📁 Project Structure

task-manager-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api.js
│   │   ├── styles.css
│
├── screenshots/
│   ├── login.png
│   ├── register.png
│   ├── tasks.png
│
└── README.md

---

## 🚀 Installation & Setup

1️⃣ Clone Repository  
git clone https://github.com/anandhavalli11/task-manager-app.git  
cd task-manager-app  

---

2️⃣ Backend Setup  
cd backend  
npm install  

Create .env file  
MONGO_URI=your_mongodb_url  
JWT_SECRET=your_secret_key  
PORT=5000  

Run backend  
node server.js  

---

3️⃣ Frontend Setup  
cd frontend  
npm install  
npm run dev  

---

## 🌐 API Endpoints

**Auth Routes**
POST /api/auth/register  
POST /api/auth/login  

**Task Routes**
GET /api/tasks  
POST /api/tasks  
PUT /api/tasks/:id  
DELETE /api/tasks/:id  

---

## 📸 Screenshots

Login Page  
![Login](./screenshots/login.png)

Register Page  
![Register](./screenshots/register.png)

Task Dashboard  
![Tasks](./screenshots/tasks.png)

---

## 🔥 Future Improvements

- 🌙 Dark Mode  
- 📱 Mobile Responsive UI  
- 📅 Due Dates  
- 🎯 Priority System  
- 🔔 Notifications  

---

## 👨‍💻 Author

Anandha Valli V  

---

## ⭐ Support

If you like this project, give a ⭐ on GitHub and feel free to contribute!
