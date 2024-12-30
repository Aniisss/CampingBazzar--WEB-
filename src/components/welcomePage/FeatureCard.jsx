import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { 
    opacity: 0, 
    x: -50,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="feature-card"
    variants={cardVariants}
    initial="initial"
    animate="animate"
    whileHover="hover"
    transition={{ delay }}
  >
    <motion.div
      whileHover={{ 
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.5 }
      }}
    >
      <Icon className="feature-icon" size={32} />
    </motion.div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);
export default FeatureCard;