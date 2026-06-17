import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Registered Successfully 🚀");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Register Failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>

      <p className="link-text" onClick={() => navigate("/login")}>
        Already have account? Login
      </p>
    </div>
  );
}