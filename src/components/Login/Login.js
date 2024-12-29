import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase auth methods
import app from "../../firebaseConfig";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Initialize Firebase Authentication
  const auth = getAuth(app);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Use Firebase to sign in the user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const token = await userCredential.user.getIdToken();
      console.log(token);

      const response = await fetch("http://20.64.237.50:3000/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      } 

        const data = await response.json();
        console.log(data);
  
      // Save user details to localStorage (or handle however you prefer)
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: data.user.userName || "User",
          email: data.user.email,
          token: token,
          avatarUrl:
            "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
        })
      );

      console.log("Login Successful:", data.user.email);
      navigate("/"); // Redirect to the Home page after successful login
    } catch (error) {
      // Handle errors from Firebase
      console.error("Login Failed:", error.message);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to continue exploring</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <span
              className="register-link"
              onClick={() => navigate("/sign-up")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
