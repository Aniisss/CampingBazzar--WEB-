import React, { useState, useEffect } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    avatarUrl: "",
  });

  useEffect(() => {
    // Fetch user data from localStorage or an API
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormData(user);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the updated profile (replace with API call if necessary)
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Profile updated successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Avatar URL:</label>
          <input
            type="text"
            name="avatarUrl"
            value={formData.avatarUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
