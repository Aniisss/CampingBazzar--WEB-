import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: { 
    opacity: 0, 
    y: 50 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100
    }
  },
  tap: {
    scale: 0.95
  }
};

const CTAButtons = ({ onExploreClick }) => (
  <motion.div
    className="cta-container"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.4, duration: 0.8 }}
  >
    <motion.button
      className="btn-primary"
      onClick={onExploreClick}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      Explore Now
    </motion.button>
    
    <motion.a
      href="/login"
      className="btn-secondary"
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      Login
    </motion.a>
  </motion.div>
);

export default CTAButtons;