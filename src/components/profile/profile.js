import React, { useState, useEffect } from "react";
import Header from "../header/header"; // Adjust the import path if necessary
import "./profile.css";
import { Link } from "react-router-dom";

const handleLogout = () => {
  localStorage.removeItem("user"); // Clear user data
  window.location.href = "/login"; // Redirect to login page
};

const Profile = () => {
  const [user, setUser] = useState({});
  const [soldItems, setSoldItems] = useState([]);
  const [boughtItems, setBoughtItems] = useState([]);

  useEffect(() => {
    // Fetch user data and transactions (replace with API calls)
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
      // Simulated data for sold and bought items
      setSoldItems([
        { id: 1, name: "Camping Tent", price: "$150", date: "2024-12-01" },
        { id: 2, name: "Sleeping Bag", price: "$50", date: "2024-12-05" },
      ]);
      setBoughtItems([
        { id: 1, name: "Camping Stove", price: "$80", date: "2024-11-20" },
        { id: 2, name: "Lantern", price: "$30", date: "2024-11-22" },
      ]);
    }
  }, []);

  return (
    <div className="profile-page">
      {/* Header Component */}
      <Header />

      {/* Profile Main Section */}
      <div className="profile1-container">
        {/* User Info Section */}
        <div className="profile1-header">
          <img
            src={user.avatarUrl || "default-avatar.png"}
            alt="User Avatar"
            className="profile1-avatar"
          />
          <h2>{user.username || "Guest"}</h2>
          <p>{user.email || "No email provided"}</p>
        </div>

        {/* Sold Items Section */}
        <div className="profile1-section">
          <h3>Items You've Sold</h3>
          {soldItems.length > 0 ? (
            <ul>
              {soldItems.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span> - {item.price} (Sold on {item.date})
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't sold any items yet.</p>
          )}
        </div>

        {/* Bought Items Section */}
        <div className="profile1-section">
          <h3>Items You've Bought</h3>
          {boughtItems.length > 0 ? (
            <ul>
              {boughtItems.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span> - {item.price} (Bought on {item.date}
                  )
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't bought any items yet.</p>
          )}
        </div>

        {/* Profile Settings Section */}
        <div className="profile1-section">
          <h3>Profile Settings</h3>
          <button className="btn">
            <Link to="/profile/edit" className="btn btn-warning">
              Edit Profile
            </Link>
          </button>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
