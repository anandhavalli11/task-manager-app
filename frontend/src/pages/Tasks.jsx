import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // ======================
  // GET TASKS
  // ======================
  const fetchTasks = async () => {
    try {
      const res = await API.get("/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (err) {
      console.log("FETCH TASK ERROR:", err);

      // If token invalid → logout
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  // ======================
  // ADD TASK
  // ======================
  const addTask = async () => {
    if (!title) return;

    try {
      await API.post(
        "/api/tasks",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      fetchTasks();
    } catch (err) {
      console.log("ADD TASK ERROR:", err);
    }
  };

  // ======================
  // DELETE TASK
  // ======================
  const deleteTask = async (id) => {
    try {
      await API.delete(`/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTasks();
    } catch (err) {
      console.log("DELETE TASK ERROR:", err);
    }
  };

  // ======================
  // TOGGLE TASK
  // ======================
  const toggleTask = async (id) => {
    try {
      await API.put(
        `/api/tasks/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();
    } catch (err) {
      console.log("TOGGLE TASK ERROR:", err);
    }
  };

  // ======================
  // LOGOUT
  // ======================
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // ======================
  // PROTECT ROUTE + LOAD
  // ======================
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetchTasks();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Task Manager 🚀</h2>

      <button onClick={logout}>Logout</button>

      <br /><br />

      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />

        <button onClick={addTask}>Add</button>
      </div>

      <br />

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} style={{ marginTop: 10 }}>
            <span
              onClick={() => toggleTask(task._id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: 10,
              }}
            >
              {task.title}
            </span>

            <button onClick={() => deleteTask(task._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}