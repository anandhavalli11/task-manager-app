import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // GET TASKS
  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setTasks(res.data);
  };

  // ADD TASK
  const addTask = async () => {
    if (!title) return;

    await axios.post(
      "http://localhost:5000/api/tasks",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setTitle("");
    fetchTasks();
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchTasks();
  };

  // TOGGLE COMPLETE
  const toggleTask = async (id) => {
    await axios.put(
      `http://localhost:5000/api/tasks/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchTasks();
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Task Manager 🚀</h2>

        <button onClick={logout} style={styles.logout}>
          Logout
        </button>
      </div>

      <p>
        Total: {tasks.length} | Completed: {completedCount}
      </p>

      <div style={styles.inputBox}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
          style={styles.input}
        />

        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p>No tasks yet 😴</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id} style={styles.card}>
              <span
                onClick={() => toggleTask(task._id)}
                style={{
                  cursor: "pointer",
                  textDecoration: task.completed ? "line-through" : "none",
                  fontSize: "18px",
                }}
              >
                {task.title}
              </span>

              <button
                onClick={() => deleteTask(task._id)}
                style={styles.delete}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ================= STYLES =================
const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
    fontFamily: "Arial",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logout: {
    background: "black",
    color: "white",
    padding: "5px 10px",
    border: "none",
    cursor: "pointer",
  },

  inputBox: {
    display: "flex",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px",
  },

  addBtn: {
    padding: "10px",
    background: "green",
    color: "white",
    border: "none",
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    margin: "10px 0",
    background: "#f4f4f4",
    borderRadius: "8px",
  },

  delete: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px",
  },
};