import React, { useState } from "react";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission success (replace with actual API call)
    if (formData.username && formData.email && formData.password && formData.password === formData.confirmPassword) {
      console.log("User Signed Up Successfully!", formData);

      // Redirect to the login page after successful sign-up
      navigate("/login");  // Make sure the route matches your Login route in App.js
    } else {
      setError("Please fill in all fields and make sure passwords match.");
    }
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <h1>Join Our Community</h1>
        <form onSubmit={handleSubmit} className="sign-up-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="sign-up-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
