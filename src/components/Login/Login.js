import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Separate CSS for styling

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a backend login process (replace with actual validation)
    if (
      formData.email === "user@example.com" &&
      formData.password === "password"
    ) {
      console.log("Login Successful!");
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: "Azer",
          avatarUrl:
            "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp  ",
        })
      );

      navigate("/"); // Navigate to the Home page after successful login
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
