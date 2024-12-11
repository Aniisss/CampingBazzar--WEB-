import React, { useState, useEffect } from "react";
import "./EditProfile.css";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    bio: "",
    avatarUrl: "",
  });

  const [newAvatar, setNewAvatar] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from localStorage or API
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserData({
        username: storedUser.username || "",
        email: storedUser.email || "",
        bio: storedUser.bio || "",
        avatarUrl: storedUser.avatarUrl || "default-avatar.png",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatar(reader.result); // Set preview for the new avatar
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Save updated profile data (simulate saving to localStorage or API)
    const updatedUser = {
      ...userData,
      avatarUrl: newAvatar || userData.avatarUrl,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated successfully!");
    // Redirect or update the state if necessary
  };

  const handleCancel = () => {
    // Redirect back to the profile page or reset changes
    window.location.href = "/profile";
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-header">
        <h2>Edit Profile</h2>
        <p>Update your personal information and preferences</p>
      </div>

      <form className="edit-profile-form">
        {/* Profile Picture Section */}
        <div className="profile-picture-section">
          <img
            src={newAvatar || userData.avatarUrl}
            alt="Profile Avatar"
            className="profile-picture"
          />
          <label htmlFor="avatar-upload" className="btn-upload">
            Change Picture
          </label>
          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleAvatarChange}
          />
        </div>

        {/* Username Input */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Bio Input */}
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={userData.bio}
            onChange={handleInputChange}
            placeholder="Write something about yourself..."
          />
        </div>

        {/* Buttons */}
        <div className="edit-profile-buttons">
          <button type="button" className="btn btn-save" onClick={handleSave}>
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
