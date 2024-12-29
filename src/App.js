import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Forum from "./components/Forum/Forum";
import CommunityForum from "./components/CommunityForum/CommunityForum";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import Login from "./components/Login/Login";
import GearPage from "./components/GearPage/GearPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Profile from "./components/profile/profile";
import EditProfile from "./components/EditProfile/EditProfile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/sign-up" element={<SignUpPage />} />²
        <Route path="/login" element={<Login />} />
        <Route path="/gears" element={<GearPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} /> {/* Profile route */}
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
