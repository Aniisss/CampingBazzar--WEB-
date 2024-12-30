import React from 'react';
import { FaSearch } from "react-icons/fa";
import { motion } from 'framer-motion';

const SearchBar = ({ searchQuery, onSearchChange, onSearchSubmit }) => (
  <motion.form 
    onSubmit={onSearchSubmit} 
    className="search-bar1"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
  >
    <motion.div
      whileHover={{ rotate: [0, -10, 10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <FaSearch className="search-icon1" />
    </motion.div>
    <motion.input
      type="text"
      className="form-control1-dark"
      placeholder="Search for items..."
      value={searchQuery}
      onChange={onSearchChange}
      whileFocus={{ width: '150px' }}
      transition={{ duration: 0.3 }}
    />
  </motion.form>
);

export default SearchBar;