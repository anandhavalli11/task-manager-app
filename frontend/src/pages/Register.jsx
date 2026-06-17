import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Registered");
    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="name" onChange={(e) =>
        setForm({ ...form, name: e.target.value })
      } />

      <input placeholder="email" onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      } />

      <input type="password" placeholder="password" onChange={(e) =>
        setForm({ ...form, password: e.target.value })
      } />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}