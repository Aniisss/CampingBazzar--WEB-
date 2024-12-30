import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const dropdownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  }
};

const UserProfile = ({ isLoggedIn, user, showDropdown, onToggleDropdown, onLogout }) => (
  <div className="profile-section">
    {isLoggedIn ? (
      <div className="profile-info">
        <motion.img
          src={user.avatarUrl || "default-avatar.png"}
          alt="Profile"
          className="profile-avatar"
          onClick={onToggleDropdown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.span 
          className="username"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {user.username}
        </motion.span>

        <AnimatePresence>
          {showDropdown && (
            <motion.div 
              className="dropdown-menu"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Link to="/profile" className="dropdown-item">View Profile</Link>
              <Link to="/profile/edit" className="dropdown-item">Settings</Link>
              <motion.button
                className="dropdown-item logout-btn"
                onClick={onLogout}
                whileHover={{ backgroundColor: '#ffecb3' }}
              >
                Logout
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ) : (
      <motion.div 
        className="auth-buttons"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/login" className="btn btn-outline-light">Login</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/sign-up" className="btn btn-warning">Sign-up</Link>
        </motion.div>
      </motion.div>
    )}
  </div>
);

export default UserProfile;