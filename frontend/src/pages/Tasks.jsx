import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // GET TASKS
  const fetchTasks = async () => {
    try {
      const res = await API.get("/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ADD / UPDATE TASK
  const handleSubmit = async () => {
    if (!title.trim()) return alert("Enter task");

    try {
      if (editId) {
        await API.put(`/api/tasks/${editId}`, {
          title,
        });
      } else {
        await API.post("/api/tasks", { title });
      }

      setTitle("");
      setEditId(null);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const deleteTask = async (id) => {
    await API.delete(`/api/tasks/${id}`);
    fetchTasks();
  };

  // EDIT (fill input)
  const startEdit = (task) => {
    setTitle(task.title);
    setEditId(task._id);
  };

  // TOGGLE COMPLETE
  const toggleTask = async (task) => {
    await API.put(`/api/tasks/${task._id}`, {
      completed: !task.completed,
    });

    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 Task Manager</h2>

      <button style={styles.logoutBtn} onClick={logout}>
        Logout
      </button>

      {/* INPUT */}
      <div style={styles.inputBox}>
        <input
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your task..."
        />

        <button style={styles.addBtn} onClick={handleSubmit}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* TASK LIST */}
      <div style={styles.list}>
        {tasks.map((task) => (
          <div key={task._id} style={styles.card}>
            <span
              onClick={() => toggleTask(task)}
              style={{
                ...styles.text,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "#000",
              }}
            >
              {task.title}
            </span>

            <div style={styles.btnGroup}>
              <button
                style={styles.editBtn}
                onClick={() => startEdit(task)}
              >
                Edit
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ====== STYLES ====== */
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "Arial",
    textAlign: "center",
  },

  heading: {
    marginBottom: "15px",
    fontSize: "24px",
    fontWeight: "bold",
  },

  logoutBtn: {
    background: "black",
    color: "white",
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    marginBottom: "15px",
    borderRadius: "5px",
  },

  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "25px",
  },

  input: {
    flex: 1,
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },

  addBtn: {
    padding: "12px 18px",
    background: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "14px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    background: "#f5f5f5",
    borderRadius: "10px",
  },

  text: {
    flex: 1,
    textAlign: "left",
    fontSize: "17px",
    fontWeight: "500",
    paddingRight: "10px",
    wordBreak: "break-word",
  },

  btnGroup: {
    display: "flex",
    gap: "8px",
  },

  editBtn: {
    background: "orange",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "5px",
  },

  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};