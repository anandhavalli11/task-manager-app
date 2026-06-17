import { useEffect, useState } from "react";
import API from "../api";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await API.get("/api/tasks");
    setTasks(res.data);
  };

  const addOrUpdate = async () => {
    if (!title.trim()) return;

    if (editId) {
      await API.put(`/api/tasks/${editId}`, { title });
    } else {
      await API.post("/api/tasks", { title });
    }

    setTitle("");
    setEditId(null);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/api/tasks/${id}`);
    fetchTasks();
  };

  const startEdit = (task) => {
    setTitle(task.title);
    setEditId(task._id);
  };

  const toggleTask = async (task) => {
    await API.put(`/api/tasks/${task._id}`, {
      completed: !task.completed,
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">

      <h2>📝 Task Manager</h2>

      <button className="logout" onClick={() => {
        localStorage.removeItem("token");
        navigate("/login");
      }}>
        Logout
      </button>

      <div className="input-box">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your task..."
        />
        <button onClick={addOrUpdate}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {tasks.map((task) => (
        <div className="task" key={task._id}>
          <span
            onClick={() => toggleTask(task)}
            className={task.completed ? "done" : ""}
          >
            {task.title}
          </span>

          <div className="btn-group">
            <button className="edit-btn" onClick={() => startEdit(task)}>
              Edit
            </button>

            <button className="delete-btn" onClick={() => deleteTask(task._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}