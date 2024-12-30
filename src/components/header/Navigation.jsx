import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/gears', label: 'Gears' },
  { to: '/community-forum', label: 'Community' },
  { to: '/about', label: 'About' }
];

const Navigation = () => (
  <motion.nav 
    className="nav"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {navItems.map((item, index) => (
      <motion.div
        key={item.to}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Link to={item.to} className="nav-link">
          {item.label}
        </Link>
      </motion.div>
    ))}
  </motion.nav>
);

export default Navigation;